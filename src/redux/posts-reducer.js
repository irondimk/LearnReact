const EDIT_TEXT_NEW_MESSAGE = 'EDIT-TEXT-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';
const DELETE_MESSAGE = 'DELETE-MESSAGE';
let avatar = "https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png";


let initialState = {
  Posts: [
    {
      id: 1,
      src: avatar,
      username: "Me",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae."
    },
    {
      id: 2,
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
              id: maxIdFind(state.Posts) + 1,
              src: avatar,
              username: "Me",
              message: action.message
            }
            newState.Posts.push(newMessage);
            return newState;
        }
        case DELETE_MESSAGE: {
          let newState = {...state};
          newState.Posts = state.Posts.filter((item) => {
            if(item.id != action.idPost){
              return true;
            }
            else{
              return false;
            }
          })
          
            return newState;
        }
        default: return state;
      }
}


export let maxIdFind = (posts) => {
  if(posts.length == 0){
    return 0;
  }
  let max = posts[0].id;
  for(let elem of posts){
    if(elem.id > max){
      max = elem.id;
    } 
  }
  console.log(max);
  return max;
}

  export const SendMessageActionCreate = (message) => {
    return {
      type: SEND_MESSAGE,
      message
    }
  }
  
  export const removeMessage = (idPost) => {
    return {
      type: DELETE_MESSAGE,
      idPost
    }
  }

export default postsReducer;