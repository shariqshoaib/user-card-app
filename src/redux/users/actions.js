import UsersApi from "../../utils/usersApi";
import { userActionTypes } from "./reducer";

export const fetchUsersRequested = () => (dispatch) => {
    dispatch({ 
        type: userActionTypes.FETCH_USERS_REQUEST, 
    })
}

export const fetchUsersSucceed = (users) => (dispatch) => {
    dispatch({ 
        type: userActionTypes.FETCH_USERS_SUCCEED, 
        payload: users, 
    })
}

export const fetchUsersFailed = (error) => (dispatch) => {
    dispatch({ 
        type: userActionTypes.FETCH_USERS_FAILED, 
        payload: error, 
    })
}

export const fetchUsers =  () => async (dispatch) => {
    try{
        dispatch(fetchUsersRequested());
        const users = await UsersApi();
        dispatch(fetchUsersSucceed(users));
    }
    catch(error){
        dispatch(fetchUsersFailed(error));
    }
}
