import { backend } from "@/utils/config";
import { Set } from "@models/set";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSets = (searchQ: string) =>
  useQuery<Set[]>({
    queryKey: ["searchSets", searchQ],
    queryFn: async () => (await axios.get(backend(`/sets?q=${searchQ}`))).data,
  });

export const useSet = (set_num: string) =>
  useQuery<Set>({
    queryKey: ["getSet"],
    queryFn: async () => (await axios.get(backend(`/sets/${set_num}`))).data,
  });
