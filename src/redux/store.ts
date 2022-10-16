import {createStore, applyMiddleware} from "redux"
import LanguageReducer from "./language/languageReducer"
import {changeLangMiddleware} from "./middlewares/changeLangMiddleware"
import {combineReducers} from '@reduxjs/toolkit'
import {productDetailSlice} from "./productDetail/slice"

const rootReducer = combineReducers({
    language: LanguageReducer,
    productDetail: productDetailSlice.reducer,
})

const store = createStore(rootReducer, applyMiddleware(changeLangMiddleware))

export type RootState = ReturnType<typeof store.getState>

export default store