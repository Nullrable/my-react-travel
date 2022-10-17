import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
    loading: boolean;
    error: string | null;
    token: any;
}

const initialState: UserState = {
    loading: false,
    error: null,
    token: null,
};


export const signIn = createAsyncThunk(
    'user/signIn',
    async (parameters: {
        email: string | null | undefined;
        password: string | null;
    }, thunkAPI) => {
        const {data} = await axios.post(
            `http://123.56.149.216:8089/auth/login`, {
                email: parameters.email,
                password: parameters.password
            }
        );
        return data.token;
    }
)

export const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: {
        [signIn.pending.type]: (state) => {
            state.loading = true;
        },
        [signIn.fulfilled.type]: (state, action) => {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
        [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});
