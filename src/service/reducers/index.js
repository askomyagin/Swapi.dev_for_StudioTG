import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { peopleReducer } from './peopleReducer';
import { imageReducer } from './imageReducer';

export const rootReducer = combineReducers({
    people: peopleReducer,
    page: pageReducer,
    image: imageReducer,
});
