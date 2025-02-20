import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ConfgurationState {
    showLoading: boolean;
    canEditProfile: boolean;
    loaderMessage: string | undefined;
}

const initialState: ConfgurationState = {
    showLoading: false,
    canEditProfile: false,
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
        },
        setCanEditProfile: (state, action: PayloadAction<boolean>) => {
            state.canEditProfile = action.payload;
        }
    }
});

export const { showLoading, setLoaderMessage, setCanEditProfile } = configurationSlice.actions;
export const configurationReducer = configurationSlice.reducer;