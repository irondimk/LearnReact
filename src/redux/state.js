const ADD_POST = 'ADD-POST';
const EDIT_TEXT_NEW_POST = 'EDIT-TEXT-NEW-POST';
const EDIT_TEXT_NEW_MESSAGE = 'EDIT-TEXT-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
  _state: {
    profilePage: {
      posts: [
        { likes: 11, message: "Npm, npx, react, jsx learn", avatarsrc: "https://im0-tub-ru.yandex.net/i?id=b57ab827966c1edd0748c1eb53fe6a2e&n=13&exp=1" },
        { likes: 99, message: "First post this", avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png" }
      ],
      newPostText: "irondimk"
    },
    dialogsPage: {
      usersdialogs: [
        { id: 1, name: "Iron" },
        { id: 2, name: "Dimk" },
      ],
      MessagesData: [
        {
          src: "https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png",
          username: "Me",
          message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae."
        },
        {
          src: "https://yt3.ggpht.com/a/AATXAJz5nJXMNqg5InMP61nXvPohz_LHXsDQXr8pS7pv=s900-c-k-c0xffffffff-no-rj-mo",
          username: "Iron",
          message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae."
        }

      ],
      newMessageText: 'iron'
    }
  },
  _rerender() {
    console.log("change");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerender = observer;
  },

  // addPost() {
  //   let newPost = { likes: 0, message: this._state.profilePage.newPostText, avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png" }
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._rerender(this);
  // },
  // editTextNewPost(postText) {
  //   this._state.profilePage.newPostText = postText;
  //   this._rerender(this);
  // },
  dispatch(action){
    switch(action.type){
      case ADD_POST:{
        let newPost = { likes: 0, message: this._state.profilePage.newPostText, avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png" }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        break;
      }
      case EDIT_TEXT_NEW_POST:{
        this._state.profilePage.newPostText = action.postText;
        break;
      }
      case EDIT_TEXT_NEW_MESSAGE:{
        this._state.dialogsPage.newMessageText = action.messageText;
        break;
      }
      case SEND_MESSAGE: {
          let newMessage = {
            src: "https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png",
            username: "Me",
            message: this._state.dialogsPage.newMessageText
          }
          this._state.dialogsPage.MessagesData.push(newMessage);
          this._state.dialogsPage.newMessageText = '';
        break;
      }
    }
    this._rerender(this);
  }
  
}




export const AddPostActionCreate = () => {
  return {
    type: ADD_POST
  }
}

export const editTextNewPostActionCreate = (text) => {
  return{
    type: EDIT_TEXT_NEW_POST,
    postText: text
  }
}

export const editTextNewMessageActionCreate = (text) => {
  return{
    type: EDIT_TEXT_NEW_MESSAGE,
    messageText: text
  }
}

export const SendMessageActionCreate = () => {
  return {
    type: SEND_MESSAGE
  }
}
export default store;
