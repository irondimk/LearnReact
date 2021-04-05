const EDIT_TEXT_NEW_MESSAGE = 'EDIT-TEXT-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';
let avatar = "https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png";


let initialState = {
  Posts: [
    {
      src: avatar,
      username: "Me",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae."
    },
    {
      src: avatar,
      username: "Me",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae."
    }
  ]
}


const postsReducer = (state = initialState, action)=> {
    switch(action.type){
        case SEND_MESSAGE: {
          let newState = {...state};
          newState.Posts = [...state.Posts];
            let newMessage = {
              src: avatar,
              username: "Me",
              message: action.message
            }
            newState.Posts.push(newMessage);
            return newState;
        }
        default: return state;
      }
}


  export const SendMessageActionCreate = (message) => {
    return {
      type: SEND_MESSAGE,
      message
    }
  }
  
export default postsReducer;