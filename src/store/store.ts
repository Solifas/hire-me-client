import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { authReducer } from "./authSlice";
import { configurationSlice } from "./configurationSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        configuration: configurationSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
setupListeners(store.dispatch);