import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import ApiClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

function usePlatform() {
  return useQuery({
    queryKey: ["platform"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("1d"),
    initialData: platform,
  });
}

export default usePlatform;
