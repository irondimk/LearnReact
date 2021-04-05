import authReducer from "./auth-reducer";
import postsReducer from "./posts-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import finalFormReducer from './finalFormDuck'
const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({profilePage:profileReducer, postsPage:postsReducer, usersPage:usersReducer, 
    auth: authReducer, finalForm: finalFormReducer});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;