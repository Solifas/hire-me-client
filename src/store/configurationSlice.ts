import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ConfgurationState {
    showLoading: boolean;
    loaderMessage: string | undefined;
}

const initialState: ConfgurationState = {
    showLoading: false,
    loaderMessage: undefined
}


export const configurationSlice = createSlice({
    name: "configuration",
    initialState,
    reducers: {
        showLoading: (state, action: PayloadAction<boolean>) => {
            state.showLoading = action.payload;
        },
        setLoaderMessage: (state, action: PayloadAction<string | undefined>) => {
            state.loaderMessage = action.payload;
        }
    }
});

export const { showLoading, setLoaderMessage } = configurationSlice.actions;
export const configurationReducer = configurationSlice.reducer;