import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const EDIT_TEXT_NEW_POST = 'profile/EDIT-TEXT-NEW-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE-POST';

let initialState = {
    posts: [
        { id: 0, likes: 11, message: "Жак Фреско", avatarsrc: "https://im0-tub-ru.yandex.net/i?id=b57ab827966c1edd0748c1eb53fe6a2e&n=13&exp=1" },
        { id: 1, likes: 99, message: "First post this", avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png" }
    ],
    newPostText: "irondimk",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newState = { ...state };
            newState.posts = [...state.posts];
            let newIdPost = maxIdPost(state.posts) + 1;
            let newPost = {
                id: newIdPost,
                likes: 0,
                message: action.post,
                avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png"
            }
            newState.posts.push(newPost);
            newState.newPostText = '';
            return newState;
        }
        case EDIT_TEXT_NEW_POST: {
            let newState = { ...state };
            newState.newPostText = action.postText;
            return newState;
        }
        case SET_USER_PROFILE: {
            let newState = { ...state, profile: action.profile }
            return newState;
        }
        case SET_USER_STATUS: {
            let newState = { ...state, status: action.status }
            return newState;
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
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

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const setUserProfile = (profile) => {
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

export const AddPostActionCreate = () => {
    return {
        type: ADD_POST
    }
}

export const AddPostActionCreateForm = (post) => {
    return {
        type: ADD_POST,
        post
    }
}

export const editTextNewPostActionCreate = (text) => {
    return {
        type: EDIT_TEXT_NEW_POST,
        postText: text
    }
}

export const openUserProfile = (idUser) => {
    return async (dispatch) => {
        let response = await profileAPI.userProfile(idUser);
        dispatch(setUserProfile(response));
        response = await profileAPI.getStatus(idUser);
        dispatch(setUserStatus(response));
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

export default profileReducer;