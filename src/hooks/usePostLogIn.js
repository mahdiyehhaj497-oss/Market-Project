import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import api from "../lib/api";

export default function usePostLogIn() {
    const navigate=useNavigate()
    const mutationFn = async ({username,password}) => {
        const { data } =await api.post("/auth/login", {
            username,
            password
        }, {
            headers: {
                "Conent-Type":"multipart/form-data"
            }
        })
        return data
    }
    return useMutation({
        mutationFn,
        onSuccess: (respons) => {
            // localStorage.setItem("token", respons.token)
            Cookies.set("token",respons.token,{expires:1})
            navigate("/admin-panel");
         },
        onError: () =>{}
    })   
}