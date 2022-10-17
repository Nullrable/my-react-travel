import { createStore, applyMiddleware } from 'redux';
import languageReducer from "./language/languageReducer";
import thunk from "redux-thunk";
import {getProductDetailById, productDetailSlice} from "./productDetail/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {changeLangMiddleware} from "./middlewares/changeLangMiddleware"

const rootReducer = combineReducers({
    language: languageReducer,
    productDetail: productDetailSlice.reducer
})

// const store = createStore(rootReducer, applyMiddleware(thunk, changeLangMiddleware));

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk).concat(changeLangMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;