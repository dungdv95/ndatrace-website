import { create } from "zustand";

type CategoryProps = {
  id: string;
  application: string;
  name: string;
  translations: {
    en: {
      values: {
        name: string;
      };
    };
  };
};

export type BlogProps = {
  id: string;
  application: string;
  categoryIds: string[];
  content: {
    htmlContent: string;
    serializedState: string;
  };
  description: string;
  name: string;
  slug: string;
  status: string;
  thumbnail: string;
  createdAt: string;
};

type State = {
  listCategory: CategoryProps[];
};

type Actions = {
  setCategories: (listCategory: CategoryProps[]) => void;
  reset: () => void;
};

const initialState: State = {
  listCategory: [],
};

export const useStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setCategories(listCategory: CategoryProps[]) {
    set({ listCategory });
  },
  reset() {
    set(initialState);
  },
}));
