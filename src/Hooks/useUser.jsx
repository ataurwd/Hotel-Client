import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = () => {
  const { data: userData = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/user");
      return res.data;
    },
  });
  return [userData, refetch];
};

export default useUser;