import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const SAVE_PHOTO_ACCESS = 'profile/SAVE_PHOTO_ACCESS';
const UPDATE_PROFILE = 'profile/UPDATE_PROFILE';
const SHOW_PRELOADER = 'profile/SHOW_PRELOADER';

let initialState = {
    profile: null,
    status: "",
    isPreloaderShow: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            let newState = { ...state, profile: action.profile }
            return newState;
        }
        case SET_USER_STATUS: {
            let newState = { ...state, status: action.status }
            return newState;
        }
        case SAVE_PHOTO_ACCESS: {
            return { ...state, profile: {...state.profile, photos: action.photos} }
        }
        case UPDATE_PROFILE: {
            let photos = state.profile.photos;
            let newState = {...state};
            newState.profile = {...action.profile};
            newState.profile.photos = {...photos};
            return newState;
        }
        case SHOW_PRELOADER: {
            return { ...state, isPreloaderShow: action.preloaderStatus}
        }
        default: return state;
    }

}


export const maxIdPost = (posts) => {
    let max = posts[0].id;
    for (let elem in posts) {
        if (posts[elem].id > max) {
            max = posts[elem].id;
        }
    }
    return max;
}

export const setUserProfile = (profile) => {
    console.log("counter");
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

export const updatePhotoProfile = (photos) => {
    return{
        type: SAVE_PHOTO_ACCESS, 
        photos
    }
}

export const updateProfileJob = (profile) => {
    return{
        type: UPDATE_PROFILE,
        profile
    }
}

const showPreloader = (preloaderStatus) => {
    return{
        preloaderStatus,
        type: SHOW_PRELOADER
    }
}

export const openUserProfile = (idUser) => {
    console.log("PIZXDEC2");
    return async (dispatch) => {
        dispatch(showPreloader(true));
        let response = await profileAPI.userProfile(idUser);
        dispatch(setUserProfile(response));
        response = await profileAPI.getStatus(idUser);
        dispatch(setUserStatus(response));
        dispatch(showPreloader(false));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        
        let response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
        
    }
}

export const updateProfile = (profile) => {
    return async (dispatch) => {
        dispatch(showPreloader());
        let response = await profileAPI.updateProfile(profile);
        if (response.resultCode === 0) {
            dispatch(updateProfileJob(profile));
        }
        dispatch(showPreloader());
    }
}

export const uploadUserPhoto = (photo) => {
    return async (dispatch) => {
        let response = await profileAPI.uploadUserPhoto(photo)
        if (response.resultCode === 0) {
            dispatch(updatePhotoProfile(response.data.photos));
        }
    }
}

export default profileReducer;