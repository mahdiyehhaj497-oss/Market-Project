import { useQuery } from "@tanstack/react-query";
import api from "../api";


export default function useGetProducts() {
    const queryFn =async () => {
        return await api.get("porducts")
    }
    return useQuery({
        queryKey: ["get-allpost"],
        queryFn
    })
}