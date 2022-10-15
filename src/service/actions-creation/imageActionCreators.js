import { makeGetRequest } from '../requests';
import { ImageActionTypes } from '../types/imageType';

export const fetchImage = (id) => async (dispatch) => {
    dispatch({ type: ImageActionTypes.TRY_FETCH_IMAGE });
    makeGetRequest(`/characters/${id}.jpg`, true)
        .then((res) => {
            dispatch({
                type: ImageActionTypes.FETCH_IMAGE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch({
                type: ImageActionTypes.FETCH_IMAGE_FAIL,
                payload: err,
            })
        );
};
