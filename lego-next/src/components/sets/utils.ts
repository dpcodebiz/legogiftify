import { backend } from "@/utils/config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSets = () =>
  useQuery({
    queryKey: ["getSets"],
    queryFn: async () => (await axios.get(backend("/sets"))).data,
  });
