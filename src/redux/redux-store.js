import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({profilePage:profileReducer, dialogsPage:dialogsReducer, usersPage:usersReducer, 
    auth: authReducer});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;