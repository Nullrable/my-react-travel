import languageReducer from "./language/languageReducer";
import thunk from "redux-thunk";
import {productDetailSlice} from "./productDetail/slice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {changeLangMiddleware} from "./middlewares/changeLangMiddleware"
import {productSearchSlice} from "./productSearch/slice";
import {signInSlice} from "./signIn/slice";

const rootReducer = combineReducers({
    language: languageReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: signInSlice.reducer,
})

// const store = createStore(rootReducer, applyMiddleware(thunk, changeLangMiddleware));

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk).concat(changeLangMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;