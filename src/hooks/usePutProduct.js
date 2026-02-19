import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api";


export default function usePutProduct() {
    const queryClient = useQueryClient();
    const mutationFn = async (productData) => {
        const { data } =
          await api.put(`products/${(productData.id, productData)}`);
      return  data
    }

   return useMutation({
       mutationFn,
       onSuccess: () => {
           queryClient.invalidateQueries(["getallproduct"]);
           alert("products updated success")
       },
       onError: () => {
           alert("product updated unsuccess")
       }
     })
}