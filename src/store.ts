import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortingValue?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  handleGenre: (genreId: number) => void;
  handlePlatform: (platformId: number) => void;
  handleSorting: (sortingValue: string) => void;
  handleGameSearch: (searchText: string) => void;
}

const useGameAction = create<GameQueryStore>((set) => ({
  gameQuery: {},
  handleGenre: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  handleGameSearch: (searchText) => set(() => ({ gameQuery: { searchText } })),
  handleSorting: (sortingValue) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortingValue } })),
  handlePlatform: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
}));

export default useGameAction;
