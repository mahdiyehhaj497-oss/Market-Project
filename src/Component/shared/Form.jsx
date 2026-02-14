import { CircleUser } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const schema = yup.object().shape({
  username: yup.string().required("username is required!!!"),
  firstname: yup.string().min(3, "min length for first name is 3"),
  lastname: yup.string().required("lastnmae is required"),
  email: yup.string().email("email is not valid!!!"),
  password: yup.string().min(8, "you need 8 charecter"),
  confirm_password:yup.string().oneOf([yup.ref("password")],"password must be matched")
})


export default function Form() {
  const { handleSubmit, register, formState: { errors },reset } = useForm({
    resolver: yupResolver(schema),
    mode:"onBlur"
  })
  function submitHandler(formData) {
    console.log(formData);
    
  }
  const queryClient = useQueryClient()
  
      async function mutationFn(data) {
          const res = await axios.post("http://harchi.com/register", data);
          return res
      }
  const { mutateAsync, data, error, status } = useMutation({
          mutationFn,
          onSuccess: (res) => {
              queryClient.invalidateQueries(["products"])
              console.log("success:", res)
          },
          onError: (error) => {
              console.log("on error:", error)
          },
  
      })
    return (
      <>
        <div>
          <div className="flext justify-center mt-auto ml-9">
            <CircleUser size={172} color="#fafafa" strokeWidth={0.5} />
          </div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col text-white  mb-1 mt-3 ">
              <label htmlFor="username" className="text-2xl ml-2">
                UserName
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 p-1.5 pl-5 rounded-2xl w-60 border border-white"
                {...register("username")}
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className="flex flex-col text-white  mb-1 mt-3">
              <label htmlFor="firstname" className="text-2xl ml-2">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="mt-1 p-1.5 pl-5 rounded-2xl w-60 border border-white"
                {...register("firstname")}
              />
            </div>
            <div className="flex flex-col text-white  mb-1 mt-3 ">
              <label htmlFor="lastname" className="text-2xl ml-2">
                LastName
              </label>
              <input
                type="text"
                id="lastname"
                className="mt-1 p-1.5 pl-5 rounded-2xl w-60 border border-white"
                {...register("lastname")}
              />
            </div>
            <div className="flex flex-col text-white  mb-1 mt-3 ">
              <label htmlFor="email" className="text-2xl ml-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-1.5 pl-5 rounded-2xl w-60 border border-white"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col text-white  mb-1 mt-3 ">
              <label htmlFor="password" className="text-2xl ml-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-1.5 pl-5 rounded-2xl w-60 border border-white"
                {...register("password")}
              />
            </div>
            <div className="flex flex-col text-white  mb-1 mt-3 ">
              <label htmlFor="confirm_password" className="text-2xl ml-2">confirm password:</label>
              <input
                className="mt-1 p-1.5 pl-5 rounded-2xl w-60 border border-white"
                type="password"
                id="confirm_password"
                {...register("confirm_password")}
              />
              {errors.confirm_password && (
                <p>{errors.confirm_password.message}</p>
              )}
            </div>
            <div className="flex justify-center items-center bg-white rounded-2xl h-8 mt-3 mx-2 ">
              <input type="submit" value="register" />
              
              <button onClick={() => reset()}>/Reset</button>
            </div>
            {/* <div className="flex justify-center items-center bg-white rounded-2xl h-8 mt-3"></div> */}
          </form>
        </div>
      </>
    );
}
   