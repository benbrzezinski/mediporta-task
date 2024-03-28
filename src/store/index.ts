import { create } from "zustand";
import { Tag } from "../types";
import { SortBy, Order } from "../enums";

interface StateTypes {
  tags: Tag[];
  page: number;
  perPage: string;
  hasMore: boolean;
  sortBy: SortBy;
  order: Order;
  setTags: (tags: Tag[]) => void;
  setPage: (page: number) => void;
  setPerPage: (perPage: string) => void;
  setHasMore: (hasMore: boolean) => void;
  setSortBy: (sortBy: SortBy) => void;
  setOrder: (order: Order) => void;
}

const useTagsStore = create<StateTypes>(set => ({
  tags: [],
  page: 1,
  perPage: "10",
  hasMore: false,
  sortBy: SortBy.Popular,
  order: Order.Descending,
  setTags: tags => set({ tags }),
  setPage: page => set({ page }),
  setPerPage: perPage => set({ perPage }),
  setHasMore: hasMore => set({ hasMore }),
  setSortBy: sortBy => set({ sortBy }),
  setOrder: order => set({ order }),
}));

export default useTagsStore;
