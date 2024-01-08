import { useQuery } from "@tanstack/react-query";
import axios from "../services/api-client";
import { ResponseData } from "./useFetched";
import { genre } from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      axios<ResponseData<Genre>>("/genres").then((res) => res.data),
    staleTime: 1 * 24 * 60 * 60 * 1000,
    initialData: { results: genre },
  });
};
export default useGenre;
