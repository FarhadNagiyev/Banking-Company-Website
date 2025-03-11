import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const isOpenSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen;
            console.log("toggle work")
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
    },
});

export const { toggle, open, close } = isOpenSlice.actions;
export default isOpenSlice.reducer;
