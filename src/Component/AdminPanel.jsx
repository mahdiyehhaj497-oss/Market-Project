
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import useGetProduct from "../hooks/useGetProduct";
import {Button} from "../components/ui/button"
import useDeleteProduct from "../hooks/useDeleteProduct";
import { useState } from "react";
import SmallForm from "./shared/smallForm";
import { useForm } from "react-hook-form";
import usePutProduct from "../hooks/usePutProduct";
import usePostProduct from "../hooks/usePostProduct";

export default function AdminPanel() {

   
    const { data, isLoading } = useGetProduct();
  const { mutate } = useDeleteProduct()
  const{mutateAsync:createMutation}=usePostProduct()
  const{mutateAsync:updateMutation}=usePutProduct()
const[editing,setEditing]=useState(null)
  
 function deleteFn(productId) {
      
     mutate(productId)  
 }
   
  const { register, handleSubmit, reset } = useForm()

  function updateProductSubmitHandler(formData) {
    if (editing === true) {
      createMutation(formData).then(() => {
        setEditing(null)
      })
  }else{ updateMutation({ ...formData, id: editing.id }).then(() => {
    setEditing(null);
    reset();
  });}
   
  }
   
   if (isLoading) {
     return <h1>isLoading...</h1>;
  }

    return (
      <>
        <Button onClick={() => {
          reset(),
          setEditing(true)
        }} variant="ghost">Add new product</Button>
        {data.data && (
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID </TableHead>
                  <TableHead> Image</TableHead>
                  <TableHead> title</TableHead>
                  <TableHead>price </TableHead>
                  <TableHead>edite </TableHead>
                  <TableHead>delete </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.data.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>
                      <img
                        src={product.image}
                        className="h-15 w-15 abject-contain"
                        alt=""
                      />
                    </TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    
                    <TableCell>
                      <Button
                        onClick={() => {
                          reset({
                            title: product.title,
                            description: product.description,
                            price: product.price,
                          });
                          setEditing(product);
                        }}
                        variant="destructive"
                      >
                        Edite
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => deleteFn(product.id)}
                        variant="destructive"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {editing && (
          <div onClick={()=> setEditing(null)} className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
            <div onClick={(e)=>e.stopPropagation()} className="flex flex-wrap justify-center items-center bg-white p-4 rounded-2xl  ">
              <form onSubmit={handleSubmit(updateProductSubmitHandler)}>
                <div className="my-4">
                  <label htmlFor="title" className="font-semibold">
                    Products title:
                  </label>
                  <input
                    className="w-full px-2 border-2 border-blue-950 rounded-2xl"
                    type="text"
                    id="title"
                    {...register("title")}
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="description" className="font-semibold">
                    Products Description:
                  </label>
                  <input
                    className="w-full px-2 border-2 border-blue-950 rounded-2xl"
                    type="text"
                    id="description"
                    {...register("discription")}
                  />
                  <div className="my-4">
                    <label htmlFor="price" className="font-semibold">
                      Products price:
                    </label>
                    <input
                      className="w-full px-2 border-2 border-blue-950 rounded-2xl"
                      type="text"
                      id="price"
                      {...register("price")}
                    />
                  </div>

                  <Button type="submit">submit</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
}