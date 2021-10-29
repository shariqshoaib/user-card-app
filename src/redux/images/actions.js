import UserApi from "../../utils/usersApi";
import { imagesActionTypes } from "./reducer";

export const fetchImagesRequested = () => (dispatch) => {
    dispatch({ 
        type: imagesActionTypes.FETCH_IMAGES_REQUEST 
    })
}

export const fetchImagesSucceed = (images) => (dispatch) => {
    dispatch({ 
        type: imagesActionTypes.FETCH_IMAGES_SUCCEED, 
        payload: images 
    })
}

export const fetchImagesFailed = (error) => (dispatch) => {
    dispatch({ 
        type: imagesActionTypes.FETCH_IMAGES_FAILED, 
        payload: error 
    })
}

export const fetchImages = () => async (dispatch) => {
    try {
        dispatch(fetchImagesRequested());

        const users = await UserApi()
        const images = {}

        for(let i=0; i< users.length; i++){
            const username = users[i].username
            const link = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`
            images[username] = link
        }

        dispatch(fetchImagesSucceed(images));
    }
    catch(error){
        dispatch(fetchImagesFailed(error));
    }
    
    
}
