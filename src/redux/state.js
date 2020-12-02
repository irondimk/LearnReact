import {rerender} from '../render';

let state = {
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

    ]
  }
}


export let addPost = () => {
  let newPost = {likes:0, message:state.profilePage.newPostText, avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png"}
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerender(state);
}

export let editTextNewPost = (postText) => {
  state.profilePage.newPostText = postText;
  rerender(state);
}

export default state;
