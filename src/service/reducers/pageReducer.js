import { PageActionTypes } from '../types/pageType';

const initialState = {
    activePage: '',
};

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PageActionTypes.SET_ACTIVE_PAGE:
            return { activePage: action.payload };

        case PageActionTypes.RESET_ACTIVE_PAGE:
            return initialState;

        default:
            return state;
    }
};
