import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    renderedFutures: "OnlineBanking",
};

const renderedFuturesSlice = createSlice({
    name: "renderedFutures",
    initialState,
    reducers: {
        changeRenderedFutures: (state, action) => {
            state.renderedFutures = action.payload;
        },
    },
});

export const { changeRenderedFutures } = renderedFuturesSlice.actions;
export default renderedFuturesSlice.reducer;