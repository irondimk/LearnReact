import { userAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const DELETE_USER_DATA = 'auth/DELETE_USER_DATA';
const LOSE_TRY_ENTER = 'auth/LOSE_TRY_ENTER';
const SET_UNAUTH_USER_DATA = 'auth/SET_UNAUTH_USER';
const CAPTCHA_CREATE = 'auth/CAPTCHA_CREATE';

let initialState = {
    userId: null, 
    email: null,
    login: null,
    isAuth: false,
    lastTryIsFalse: false,
    isLoadComplete: false,
    captcha: null,
    profile: null
  }

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:{
            return{
                ...state, ...action.data, isAuth: true, lastTryIsFalse: false, isLoadComplete: true, captcha: null 
            }
        }
        case SET_UNAUTH_USER_DATA: {
            return{
                ...state, isAuth: false, lastTryIsFalse: false, isLoadComplete: true 
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
        case CAPTCHA_CREATE: {
            return{ ...state, captcha: action.captcha}
        }
        default: return state;
    }   
}

export const setAuthUserData = (userId, email, login, captcha) => {
    return{
        type: SET_USER_DATA,
        data: {userId, email, login, captcha}
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

export const setUnauthorizatUser = () => {
    return{
        type: SET_UNAUTH_USER_DATA,
    }
}

const captchaCreate = (captcha) => {
    return {
        type: CAPTCHA_CREATE,
        captcha
    }
}

export const auth = () => {
    return async (dispatch) => {
        let response = await userAPI.auth();
           if(response.resultCode == 0){
               dispatch(setAuthUserData(response.data.id,
                response.data.email,
                response.data.login, null));
           }
           else{
            dispatch(setUnauthorizatUser());
           }
    }
}

export const enterSite = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await userAPI.enterSite(email, password, rememberMe, captcha)
            if(response.resultCode == 10){
                response = await userAPI.captcha();
                dispatch(captchaCreate(response.url));
            }
           if(response.resultCode == 0){
               response = await userAPI.auth()       
                if(response.resultCode == 0){
                    dispatch(setAuthUserData(response.data.id,
                        response.data.email,
                        response.data.login, null));
                }
           }
           else{
               dispatch(falseTryIsEnterAC());
           }
    }
}

export const exitSite = () => {
    return async (dispatch) => {
        let response = await userAPI.exitSite()
           if(response.resultCode == 0){
               dispatch(deleteAuthUserData(null, null, null));
           }
    }
}


export default authReducer;