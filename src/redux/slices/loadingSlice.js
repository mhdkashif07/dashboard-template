import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    fetching: false,
    error: "",
    success: " "
};

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        isLoading: (state) => {
            state.loading = true;
            toast.success("Loading...", {
                position: "bottom-left",
              });
        },

        isSuccess: (state, { payload} ) => {
            state.loading = false;
            state.success=payload
            toast.success(`${state.success}`, {
                position: "bottom-left",
              });
        },

        isFetching: (state, { payload } ) => {
            state.loading = false;
            state.error = payload
        },
        isError: (state, { payload }) => {
            state.loading = true;
            state.error = payload
            toast.error(`${state.error}`, {
                position: "bottom-left",
              });
        }
    },
});

export const { isLoading, isSuccess, isFetching, isError } = loadingSlice.actions;
export default loadingSlice.reducer