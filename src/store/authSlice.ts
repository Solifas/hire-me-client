import { LoginResponse } from "../types/LoginResponse";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    loginResponse: LoginResponse | undefined;
    errorMessage: string | undefined;
}

const initialState: AuthState = {
    loginResponse: undefined,
    errorMessage: undefined
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<LoginResponse | undefined>) => {
            state.loginResponse = action.payload;
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.errorMessage = action.payload;
        },
    }
});

export const { setUser, setError } = authSlice.actions;
export const authReducer = authSlice.reducer;