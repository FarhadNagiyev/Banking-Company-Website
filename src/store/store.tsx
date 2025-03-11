import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from "./slices/isOpenSlice";

export const store = configureStore({
    reducer: {
        modal: isOpenReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
