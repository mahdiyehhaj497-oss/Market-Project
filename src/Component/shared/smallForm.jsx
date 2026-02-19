import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import api from "../../lib/api";
import usePostProduct from "../../hooks/usePostProduct";
import { Button } from "../../components/ui/button";

export default function SmallForm() {

     const {  mutateAsync } =usePostProduct()
    // // function submitHandler(formData) {
    // //     mutateAsync({
    // //         title: formData.title,
    // //       discription: formData.discription,
    // //         price:form.price
    // //     })
        
  // }
  
  function updateProductSubmitHandler(formData) {
    
  }
    const {register, handleSubmit,reset} = useForm({
        defaultValues: {
            title: "",
        discription: "",
            price:""
        }
    })

   
    return (
      <>
        <div className="flex flex-wrap justify-center items-center bg-white p-4 rounded-2xl  ">
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
              <label htmlFor="discription" className="font-semibold">
                Products Discription:
              </label>
              <input
                className="w-full px-2 border-2 border-blue-950 rounded-2xl"
                type="text"
                id="discription"
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
      </>
    );
}
