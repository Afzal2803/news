import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./api/commonSlice";
import { postReducer } from "./api/postReducer";
import { getReducer } from "./api/getReducer";

export const store = configureStore({
  reducer: {
    auth: userSlice,
    get: getReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
