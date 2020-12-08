const ADD_POST = 'ADD-POST';
const EDIT_TEXT_NEW_POST = 'EDIT-TEXT-NEW-POST';


let initialState = {
    posts: [
      { likes: 11, message: "Npm, npx, react, jsx learn", avatarsrc: "https://im0-tub-ru.yandex.net/i?id=b57ab827966c1edd0748c1eb53fe6a2e&n=13&exp=1" },
      { likes: 99, message: "First post this", avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png" }
    ],
    newPostText: "irondimk"
  }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                likes: 0,
                message: state.newPostText,
                avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png"
            }
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        }
        case EDIT_TEXT_NEW_POST: {
            state.newPostText = action.postText;
            break;
        }
    }
    return state;
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

export default profileReducer;