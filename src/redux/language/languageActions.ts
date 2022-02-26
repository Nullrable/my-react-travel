export const CHANGE_LANG = "CHANGE_LANG"
export const ADD_LANG = "ADD_LANG"

interface ChangeLanguageAction {
    type: typeof CHANGE_LANG;
    payload: "zh" | "en";
}

interface AddLanguageAction {
    type: typeof ADD_LANG;
    payload: { name: string; code: string };
}

export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;

export const changeLanguageActionCreator = (
    languageCode: "zh" | "en"
): ChangeLanguageAction => {
    return {
        type: CHANGE_LANG,
        payload: languageCode,
    };
};

export const addLanguageActionCreator = (
    name: string,
    code: string
): AddLanguageAction => {
    return {
        type: ADD_LANG,
        payload: { name, code },
    };
};