import { PeopleActionTypes } from '../types/peopleTypes';

const initialState = {
    loading: false,
    peopleList: [],
    nextPage: null,
    prevPage: null,
    totalCount: 0,
    error: null,
};

export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case PeopleActionTypes.TRY_FETCH_PEOPLE:
            return { ...state, loading: true };

        case PeopleActionTypes.FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                peopleList: action.payload.results,
                totalCount: action.payload.count,
                nextPage: action.payload.next,
                prevPage: action.payload.previous,
            };

        case PeopleActionTypes.FETCH_PEOPLE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case PeopleActionTypes.LOAD_MORE_PEOPLE:
            return {
                ...state,
            };

        case PeopleActionTypes.LOAD_MORE_PEOPLE_SUCCESS:
            return {
                ...state,
                peopleList: [...state.peopleList, ...action.payload.results],
                nextPage: action.payload.next,
                prevPage: action.payload.previous,
            };

        case PeopleActionTypes.LOAD_MORE_PEOPLE_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};
