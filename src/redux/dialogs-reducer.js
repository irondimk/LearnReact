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
          state.newMessageText = action.messageText;
          break;
        }
        case SEND_MESSAGE: {
            let newMessage = {
              src: "https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png",
              username: "Me",
              message: state.newMessageText
            }
            state.MessagesData.push(newMessage);
            state.newMessageText = '';
          break;
        }
      }
    return state;
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