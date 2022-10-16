import * as peopleActionCreators from './peopleActionCreators';
import * as pageActionCreators from './pageActionCreators';
import * as languageActionCreators from './languageActionCreators';

export const actionCreators = {
    ...peopleActionCreators,
    ...pageActionCreators,
    ...languageActionCreators,
};
