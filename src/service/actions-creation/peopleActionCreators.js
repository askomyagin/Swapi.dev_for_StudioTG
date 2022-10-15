import { makeGetRequest } from '../requests';
import { PeopleActionTypes } from '../types/peopleTypes';

export const fetchPeople = (namePeople) => async (dispatch) => {
    dispatch({ type: PeopleActionTypes.TRY_FETCH_PEOPLE });
    await makeGetRequest(`/people/?search=${namePeople}`)
        .then((res) => {
            dispatch({
                type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch({
                type: PeopleActionTypes.FETCH_PEOPLE_FAIL,
                payload: err,
            })
        );
};

export const fetchMorePeople = (url) => async (dispatch) => {
    dispatch({ type: PeopleActionTypes.LOAD_MORE_PEOPLE });
    await makeGetRequest(url, true)
        .then((res) => {
            dispatch({
                type: PeopleActionTypes.LOAD_MORE_PEOPLE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch({
                type: PeopleActionTypes.LOAD_MORE_PEOPLE_FAIL,
                payload: err,
            })
        );
};
