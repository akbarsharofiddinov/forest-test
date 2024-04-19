import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  categories: ICategory[];
  feedModal: boolean;
  category_id: number;
  products: IProduct[];
}

const initialState: IState = {
  categories: [],
  feedModal: false,
  category_id: 0,
  products: [],
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    setFeedModal: (state, action: PayloadAction<boolean>) => {
      state.feedModal = action.payload;
    },

    setCategoryId: (state, action: PayloadAction<number>) => {
      state.category_id = action.payload;
    },

    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = [...action.payload];
    },
  },
});

export default storeSlice.reducer;

export const { setFeedModal, setCategoryId, setProducts } = storeSlice.actions;
