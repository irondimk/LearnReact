import profileReducer, { AddPostActionCreateForm, deletePost } from "./profile-reducer";


test('New post should be added', () => {
    //test data
    let action = AddPostActionCreateForm("test text");

    let initialState = {
        posts: [
          { likes: 11, message: "Жак Фреско", avatarsrc: "https://im0-tub-ru.yandex.net/i?id=b57ab827966c1edd0748c1eb53fe6a2e&n=13&exp=1" },
          { likes: 99, message: "First post this", avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png" }
        ]
      }

    //call reducer for getting new state after work
    let newState = profileReducer(initialState, action);

    //expectation 
    // expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("test text");
  });
  

  test('delete post and decrement post length', () => {
    //test data
    let action = deletePost(0);

    let initialState = {
        posts: [
          { likes: 11, message: "Жак Фреско", avatarsrc: "https://im0-tub-ru.yandex.net/i?id=b57ab827966c1edd0748c1eb53fe6a2e&n=13&exp=1" },
          { likes: 99, message: "First post this", avatarsrc: "https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png" }
        ]
      }

    //call reducer for getting new state after work
    let newState = profileReducer(initialState, action);

    //expectation 
    expect(newState.posts.length).toBe(2);
  });

