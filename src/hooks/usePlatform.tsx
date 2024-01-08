import { useQuery } from "@tanstack/react-query";
import axios, { ResponseData } from "../services/api-client";
import { platform } from "../data/platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatform() {
  return useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      axios
        .get<ResponseData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 1 * 24 * 60 * 60 * 1000,
    initialData: { results: platform },
  });
}

export default usePlatform;
