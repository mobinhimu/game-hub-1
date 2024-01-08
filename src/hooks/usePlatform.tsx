import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import ApiClient from "../services/api-client";

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
    staleTime: 1 * 24 * 60 * 60 * 1000,
    initialData: platform,
  });
}

export default usePlatform;
