import { backend } from "@/utils/config";
import { Part } from "@models/part";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useParts = (set_num: string) =>
  useQuery<Part[]>({
    queryKey: ["getParts"],
    queryFn: async () => (await axios.get(backend(`/parts/${set_num}`))).data,
  });
