import { ImageActionTypes } from '../types/imageType';

const initialState = {
    loading: false,
    image: [],
    error: null,
};

export const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ImageActionTypes.TRY_FETCH_IMAGE:
            return { loading: true, image: [], error: null };

        case ImageActionTypes.FETCH_IMAGE_SUCCESS: {
            return { loading: false, image: action.payload, error: null };
        }

        case ImageActionTypes.FETCH_IMAGE_FAIL:
            return { loading: false, image: [], error: action.payload };

        default:
            return state;
    }
};
