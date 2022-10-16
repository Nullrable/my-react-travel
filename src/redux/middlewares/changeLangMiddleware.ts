import { Middleware } from "redux";
import i18n from "i18next";

import {CHANGE_LANG, LanguageActionTypes} from "../language/languageActions";

export const changeLangMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type == CHANGE_LANG) {
        i18n.changeLanguage(action.payload);
    }
    next(action);
};
