import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api";


export default function useDeleteProduct() {

const queryClient = useQueryClient();

    const mutationFn =async(productId) => {
        const { data } = await api.delete(`products/${productId}`) 
        return data
    }
    return useMutation({
        mutationFn,
        onSuccess: () => {
            alert("delete product is success")
            queryClient.invalidateQueries(["getallproduct"]);
        },
        onError: () => {
            alert("deleted is feild")
        }
    })
}