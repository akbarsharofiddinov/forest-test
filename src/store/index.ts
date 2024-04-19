import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./storeSlice/storeSlice";
import { storeAPI } from "./RTKQuery";

const store = configureStore({
  reducer: {
    storeSlice,
    [storeAPI.reducerPath]: storeAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store