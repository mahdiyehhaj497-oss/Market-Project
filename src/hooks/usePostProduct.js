import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api";

export default function usePostProduct() {
    const queryClient = useQueryClient()
    
    const mutationFn= async (data) => {
         return api.post("products", {
           title: data.title,
           discription: data.discription,
         });
       }
    return useMutation({
       mutationFn,
       onSuccess: (res) => {
           alert("product added")
           queryClient.invalidateQueries(["getallproduct"])
       },
       onError: (err) => {
         switch (err.status) {
           case 400:
             alert("invalid product");
           }
           alert("feild")
       },
     });
}