import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


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

  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._rerender(this);
  }
}





export default store;
