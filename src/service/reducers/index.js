import { combineReducers } from 'redux';
import { languageReducer } from './languageReducer';
import { pageReducer } from './pageReducer';
import { peopleReducer } from './peopleReducer';

export const rootReducer = combineReducers({
    people: peopleReducer,
    page: pageReducer,
    language: languageReducer,
});
