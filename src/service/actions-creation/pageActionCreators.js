import { PageActionTypes } from '../types/pageType';

export const setActivePage = (location) => (dispatch) => {
    dispatch({ type: PageActionTypes.SET_ACTIVE_PAGE, payload: location.pathname });
};

export const resetActivePage = () => (dispatch) => {
    dispatch({ type: PageActionTypes.RESET_ACTIVE_PAGE });
};
