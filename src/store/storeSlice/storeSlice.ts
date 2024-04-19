import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  categories: ICategory[];
  feedModal: boolean;
}

const initialState: IState = {
  categories: [],
  feedModal: false,
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    setFeedModal: (state, action: PayloadAction<boolean>) => {
      state.feedModal = action.payload;
    },
  },
});

export default storeSlice.reducer;

export const { setFeedModal } = storeSlice.actions;
