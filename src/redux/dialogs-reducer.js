const EDIT_TEXT_NEW_MESSAGE = 'EDIT-TEXT-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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


const dialogsReducer = (state = initialState, action)=> {
    switch(action.type){
        case EDIT_TEXT_NEW_MESSAGE:{
          let newState = {...state};
          newState.usersdialogs = [...state.usersdialogs];
          newState.MessagesData = [...state.MessagesData];
          newState.newMessageText = action.messageText;
          return newState;
        }
        case SEND_MESSAGE: {
          let newState = {...state};
          newState.usersdialogs = [...state.usersdialogs];
          newState.MessagesData = [...state.MessagesData];
            let newMessage = {
              src: "https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png",
              username: "Me",
              message: newState.newMessageText
            }
            newState.MessagesData.push(newMessage);
            newState.newMessageText = '';
            return newState;
        }
        default: return state;
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
  
export default dialogsReducer;