import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface ProductDetailState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null,
};


export const getProductDetailById = createAsyncThunk(
    'productDetail/getProductDetailById',
    async (productId: string, thunkAPI) => {
        const fetchData = async () => {
             thunkAPI.dispatch(productDetailSlice.actions.fetchStart());
            try {
                const { data } = await axios.get(
                    `http://123.56.149.216:8089/api/TouristRoutes/${productId}`
                );
                thunkAPI.dispatch(productDetailSlice.actions.fetchSuccess(data));
            } catch (error) {
                thunkAPI.dispatch(
                    productDetailSlice.actions.fetchFail(
                        error instanceof Error ? error.message : "error"
                    )
                );
            }
        };
        await fetchData();
    }
)

export const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: {
        fetchStart: (state) => {
            // return { ...state, loading: true };
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchFail: (state, action: PayloadAction<string | null>) => {
            //   const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
    },
});
