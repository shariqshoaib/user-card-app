export const userActionTypes = {
    FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCEED: 'FETCH_USERS_SUCCEED',
    FETCH_USERS_FAILED: 'FETCH_USERS_FAILED',
}

const initialUserState = {
    data: [],
    isLoading: false,
    error: '',
}

const usersReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case userActionTypes.FETCH_USERS_REQUEST:
            return { ...state, isLoading: true }

        case userActionTypes.FETCH_USERS_SUCCEED:
            return { ...state, isLoading: false, data: action.payload }

        case userActionTypes.FETCH_USERS_FAILED:
            return { ...state, isLoading: false, error: action.payload }
            
        default: return state;
    }
}

export default usersReducer;