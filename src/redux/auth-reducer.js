import { userAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';
const LOSE_TRY_ENTER = 'LOSE_TRY_ENTER';

let initialState = {
    userId: null, 
    email: null,
    login: null,
    isAuth: false,
    lastTryIsFalse: false,
    isLoad: false
  }

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:{
            debugger;
            return{
                ...state, ...action.data, isAuth: true, lastTryIsFalse: false, isLoad: true 
            }
        }
        case DELETE_USER_DATA: {
            return{
                ...state, ...action.data, isAuth: false, lastTryIsFalse: false
            }
        }
        case LOSE_TRY_ENTER: {
            return{
                ...state, lastTryIsFalse: true
            }
        }
        default: return state;
    }   
}

export const setAuthUserData = (userId, email, login) => {
    return{
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

export const deleteAuthUserData = (userId, email, login) => {
    return{
        type: DELETE_USER_DATA,
        data: {userId, email, login}
    }
}

export const falseTryIsEnterAC = () => {
    return{
        type: LOSE_TRY_ENTER,
    }
}

export const auth = () => {
    return (dispatch) => {
        userAPI.auth()
        .then(response => {       
           if(response.resultCode == 0){
               dispatch(setAuthUserData(response.data.id,
                response.data.email,
                response.data.login));
           }
        });
    }
}

export const enterSite = (email, password, rememberMe) => {
    return (dispatch) => {
        userAPI.enterSite(email, password, rememberMe)
        .then(response => {
           if(response.resultCode == 0){
               userAPI.auth()
                .then(response => {       
                if(response.resultCode == 0){
                    dispatch(setAuthUserData(response.data.id,
                        response.data.email,
                        response.data.login));
                }
                });
           }
           else{
               dispatch(falseTryIsEnterAC());
           }
        });
    }
}

export const exitSite = () => {
    return (dispatch) => {
        userAPI.exitSite()
        .then(response => {
           if(response.resultCode == 0){
               dispatch(deleteAuthUserData(null, null, null));
           }
        });
    }
}


export default authReducer;