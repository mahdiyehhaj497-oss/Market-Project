import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import api from "../../lib/api";
import usePostProduct from "../../hooks/usePostProduct";

export default function SmallForm() {

     const {  mutateAsync } =usePostProduct()
    function submitHandler(formData) {
        mutateAsync({
            title: formData.title,
            discription:formData.discription
        })
        
    }
    const {register, handleSubmit} = useForm({
        defaultValues: {
            title: "",
            discription:""
        }
    })

   
    return (
      <>
        <div className="flex flex-wrap justify-center items-center  ">
          <form onSubmit={handleSubmit(submitHandler)}>
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

              <input
                type="submit"
                className="w-full px-2 py-1 border-2 bg-blue-950 text-white rounded-2xl mt-6"
              />
            </div>
          </form>
        </div>
      </>
    );
}