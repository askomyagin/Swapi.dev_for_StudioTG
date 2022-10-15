import * as peopleActionCreators from './peopleActionCreators';
import * as pageActionCreators from './pageActionCreators';
import * as imageActionCreators from './imageActionCreators';

export const actionCreators = {
    ...peopleActionCreators,
    ...pageActionCreators,
    ...imageActionCreators,
};
