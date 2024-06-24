import { backend } from "@/utils/config";
import { Set } from "@models/set";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSets = () =>
  useQuery<Set[]>({
    queryKey: ["getSets"],
    queryFn: async () => (await axios.get(backend("/sets"))).data,
  });

export const useSet = (set_num: string) =>
  useQuery<Set>({
    queryKey: ["getSet"],
    queryFn: async () => (await axios.get(backend(`/sets/${set_num}`))).data,
  });
