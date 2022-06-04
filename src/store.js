import { configureStore } from "@reduxjs/toolkit";
// import { authApi } from "./services/Auth";
import ThemeReducer from "./redux/reducers/ThemeReducer"
import loadingReducer from "./redux/slices/loadingSlice"

// console.log(authApi);

export const store = configureStore({
    reducer: {
        // [authApi.reducerPath]: authApi.reducer,
        rootReducer: ThemeReducer,
        loading: loadingReducer,

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});