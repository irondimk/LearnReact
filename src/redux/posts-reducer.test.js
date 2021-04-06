import { maxIdFind } from "./posts-reducer";


test('function maxId in posts', () => {
  //test data
  let initialState = {
    Posts: [
      {
        id: 1,
        username: "Me",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae."
      },
      {
        id: 2,
        username: "Me",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae."
      }
    ]
  }
  
  let maxId = maxIdFind(initialState.Posts);

  //expectation 
  expect(maxId).toBe(2);
});