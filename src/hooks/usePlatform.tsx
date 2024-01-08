import { useQuery } from "@tanstack/react-query";
import axios from "../services/api-client";
import { ResponseData } from "./useFetched";
import { Platform } from "./useGameGrid";

// https://api.rawg.io/api/platforms/lists/parents

function usePlatform() {
  return useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      axios
        .get<ResponseData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
  });
}

export default usePlatform;
