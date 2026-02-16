import { useQuery } from "@tanstack/react-query"
import api from "../lib/api"
// import api from "c:/Users/lenovo/Desktop/react/007/session-files/007/src/lib/api"

export default function useGetProduct() {
    const queryFn = async ()=> {
        return await api.get("products")
    }
    return useQuery({
        queryKey: ["getallproduct"],
        queryFn
    })
}