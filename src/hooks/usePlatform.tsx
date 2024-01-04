import useFetched from "./useFetched";
import { Platform } from "./useGameGrid";

const usePlatform = () => useFetched<Platform>("/platforms/lists/parents");
export default usePlatform;
