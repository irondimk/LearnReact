import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const EDIT_TEXT_NEW_POST = 'EDIT-TEXT-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
      { likes: 11, message: "Жак Фреско", avatarsrc: "https://im0-tub-ru.yandex.net/i?id=b57ab827966c1edd0748c1eb53fe6a2e&n=13&exp=1" },
      { likes: 99, message: "First post this", avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png" }
    ],
    newPostText: "irondimk",
    profile: null,
    status: ""
  }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newState = {...state  };
            newState.posts = [...state.posts];
            let newPost = {
                likes: 0,
                message: newState.newPostText,
                avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png"
            }
            newState.posts.push(newPost);
            newState.newPostText = '';
            return newState;
        }
        case EDIT_TEXT_NEW_POST: {
            let newState = {...state  };
            newState.newPostText = action.postText;
            return newState;
        }
        case SET_USER_PROFILE:{
            let newState = {...state, profile: action.profile}
            return newState;
        }
        case SET_USER_STATUS:{
            let newState = {...state, status: action.status}
            return newState;
        }
        default: return state;
    }
    
}

export const setUserProfile = (profile) => {
    return{
        type: SET_USER_PROFILE,
        profile
    }
}

export const setUserStatus = (status) => {
    return{
        type: SET_USER_STATUS,
        status
    }
}

export const AddPostActionCreate = () => {
    return {
        type: ADD_POST
    }
}

export const editTextNewPostActionCreate = (text) => {
    return {
        type: EDIT_TEXT_NEW_POST,
        postText: text
    }
}

export const openUserProfile = (idUser) => {
    return (dispatch) => {
        if(!idUser){
            idUser = 2;
        }
        profileAPI.userProfile(idUser).then(response => {      
            dispatch(setUserProfile(response));
            });

        profileAPI.getStatus(idUser).then(response => {      
            dispatch(setUserStatus(response));
            });
        
    }
}

export const updateStatus = (status) => {
    console.log(123);
    return(dispatch) => {
        profileAPI.updateStatus(status).then(response => {   
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(response));
            }   
            });
    }
    
}

export default profileReducer;