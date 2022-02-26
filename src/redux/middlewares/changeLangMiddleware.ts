import { Middleware } from "redux";
import i18n from "i18next";

export const changeLangMiddleware: Middleware = (store) => (next) => (action) => {
    i18n.changeLanguage(action.payload);
    next(action);
};
