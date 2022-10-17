import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface SearchProductState {
    loading: boolean;
    error: string | null;
    data: any;
    pagination: any
}

const initialState: SearchProductState = {
    loading: true,
    error: null,
    data: null,
    pagination: null
};


export const searchProduct = createAsyncThunk(
    'productSearch/searchProduct',
    async (parameters:{
            keywords: string | null | undefined;
            nextPage: number | string;
            pageSize: number | string;
        }, thunkAPI) => {
        const fetchData = async () => {
             thunkAPI.dispatch(productSearchSlice.actions.fetchStart());
            try {
                let url = `http://123.56.149.216:8089/api/touristRoutes?pageNumber=${parameters.nextPage}&pageSize=${parameters.pageSize}`;
                if (parameters.keywords) {
                    url += `&keyword=${parameters.keywords}`;
                }
                const response = await axios.get(url);
                const data = {
                    data: response.data,
                    pagination: JSON.parse(response.headers["x-pagination"] as string),
                }
                thunkAPI.dispatch(productSearchSlice.actions.fetchSuccess(data));
            } catch (error) {
                thunkAPI.dispatch(
                    productSearchSlice.actions.fetchFail(
                        error instanceof Error ? error.message : "error"
                    )
                );
            }
        };
        await fetchData();
    }
)

export const productSearchSlice = createSlice({
    name: "productSearch",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.data = action.payload.data;
            state.pagination = action.payload.pagination;
            state.loading = false;
            state.error = null;
        },
        fetchFail: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
