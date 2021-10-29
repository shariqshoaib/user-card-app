import usersReducer from "./users/reducer";
import imagesReducer from "./images/reducer";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    users: usersReducer,
    images: imagesReducer,
})

const middleware = composeWithDevTools(
    applyMiddleware(ThunkMiddleware, logger)
)

const store = createStore(
    rootReducer,
    middleware
)

export default store;
