import { genre } from "../genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  return { data: genre, loading: null, error: null };
};
export default useGenre;
