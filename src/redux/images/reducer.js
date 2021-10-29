export const imagesActionTypes = {
    FETCH_IMAGES_REQUEST: 'FETCH_IMAGES_REQUEST',
    FETCH_IMAGES_SUCCEED: 'FETCH_IMAGES_SUCCEED',
    FETCH_IMAGES_FAILED: 'FETCH_IMAGES_FAILED',
}

const initialImagesState = {
    data: {},
    isLoading: false,
    error: '',
}

const imagesReducer = (state = initialImagesState, action) => {
    switch(action.type) {
        case imagesActionTypes.FETCH_IMAGES_REQUEST:
            return { ...state, isLoading: true }

        case imagesActionTypes.FETCH_IMAGES_SUCCEED:
            return { ...state, isLoading: false, data: action.payload }

        case imagesActionTypes.FETCH_IMAGES_FAILED:
            return { ...state, isLoading: false, error: action.payload }
            
        default: return state;
    }
}

export default imagesReducer;