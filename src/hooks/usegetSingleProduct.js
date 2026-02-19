import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";

export default function useGetSingleProduct(id) {
  const queryFn = async () => {
      const res = await api.get(`products/${id}`);
      return res.data
  };
  return useQuery({
    queryKey: ["get single product"],
    queryFn,
  });
}
