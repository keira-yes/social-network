import { initialState, profileReducer, addPost } from './profileReducer';

const action = addPost('This is test post');

it('posts length should be increased after post adding', () => {
    const result = profileReducer(initialState, action);
    expect(result.posts.length).toBe(3);
});

it('post message should be correct', () => {
    const result = profileReducer(initialState, action);
    expect(result.posts[2].message).toBe('This is test post');
});