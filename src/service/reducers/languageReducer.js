import { LanguageActionTypes } from '../types/languageType';

const initialState = {
    loading: false,
    peopleWookiee: [],
    error: [],
};

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LanguageActionTypes.TRY_LANGUAGE_PEOPLE:
            return { ...state, loading: true };

        case LanguageActionTypes.FETCH_LANGUAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                peopleWookiee: [...state.peopleWookiee, action.payload],
            };

        case LanguageActionTypes.FETCH_LANGUAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
