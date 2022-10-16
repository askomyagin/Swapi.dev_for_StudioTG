import { makeGetRequest } from '../requests';
import { LanguageActionTypes } from '../types/languageType';

export const fetchLanguagePeople = (url) => async (dispatch) => {
    dispatch({ type: LanguageActionTypes.TRY_LANGUAGE_PEOPLE });
    await makeGetRequest(`${url}/?format=wookiee`, true)
        .then((res) => {
            dispatch({
                type: LanguageActionTypes.FETCH_LANGUAGE_SUCCESS,
                payload: _transformWookiee(res.data, url),
            });
        })
        .catch((err) =>
            dispatch({
                type: LanguageActionTypes.FETCH_LANGUAGE_FAIL,
                payload: err,
            })
        );
};

const _transformWookiee = (res, url) => {
    return {
        url: url,
        name: res.whrascwo,
        height: res.acwoahrracao === 'huwhorwhooohwh' ? 'no' : res.acwoahrracao,
        mass: res.scracc === 'huwhorwhooohwh' ? 'no' : res.scracc,
        hair_color: res.acraahrc_oaooanoorc,
        skin_color: res.corahwh_oaooanoorc,
        eye_color: res.worowo_oaooanoorc,
        birth_year: res.rhahrcaoac_roworarc,
        gender: res.rrwowhwaworc,
        designation_name: 'whrascwo',
        designation_height: 'acwoahrracao',
        designation_mass: 'scracc',
        designation_hair_color: 'acraahrc_oaooanoorc',
        designation_skin_color: 'corahwh_oaooanoorc',
        designation_eye_color: 'worowo_oaooanoorc',
        designation_birth_year: 'rhahrcaoac_roworarc',
        designation_gender: 'rrwowhwaworc',
    };
};
