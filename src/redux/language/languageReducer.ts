import { CHANGE_LANG, ADD_LANG, LanguageActionTypes } from "./languageActions";

export interface LanguageState {
    language: "en" | "zh";
    languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" },
    ],
};

export default (state = defaultState, action: LanguageActionTypes) => {
    switch (action.type) {
        case CHANGE_LANG:
            return { ...state, language: action.payload };
        case ADD_LANG:
            return {
                ...state,
                languageList: [...state.languageList, action.payload],
            };
        default:
            return state;
    }
};
