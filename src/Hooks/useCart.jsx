import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCart = () => {
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/carts");
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
