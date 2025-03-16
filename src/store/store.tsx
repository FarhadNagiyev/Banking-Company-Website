import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from "./slices/isOpenSlice";
import renderedFuturesReducer from "./slices/renderedFuturesSlice";

export const store = configureStore({
    reducer: {
        modal: isOpenReducer,
        renderedFutures: renderedFuturesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
