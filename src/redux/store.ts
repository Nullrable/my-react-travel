import languageReducer from "./language/languageReducer";
import thunk from "redux-thunk";
import {productDetailSlice} from "./productDetail/slice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {changeLangMiddleware} from "./middlewares/changeLangMiddleware"
import {productSearchSlice} from "./productSearch/slice";
import {signInSlice} from "./signIn/slice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    language: languageReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: signInSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["user"]
}

// const store = createStore(rootReducer, applyMiddleware(thunk, changeLangMiddleware));
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk).concat(changeLangMiddleware)
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, persistor };