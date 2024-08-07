import { create } from "zustand";

type StoreType = {
  page: string;
  setPage: (page: string) => void;
};

const usePageStore = create<StoreType>((set) => ({
  page: "/",
  isPaging: false,
  setPage: (page) => {
    set({ page });
  },
}));

export default usePageStore;
