import {createStore, applyMiddleware} from "redux"
import LanguageReducer from "./language/languageReducer"
import {changeLangMiddleware} from "./middlewares/changeLangMiddleware"

const store = createStore(LanguageReducer, applyMiddleware(changeLangMiddleware))

export type RootState = ReturnType<typeof store.getState>

export default store