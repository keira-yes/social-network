import { initialState, profileReducer, addPost } from './profileReducer';

it('add post', () => {
    const action = addPost('This is test post');
    const result = profileReducer(initialState, action);
    expect(result.posts.length).toBe(3);
})