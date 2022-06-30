import { initialState, profileReducer, addPost, deletePost } from './profileReducer';

const addAction = addPost('This is test post');
const deleteAction = deletePost(1);

it('posts length should be increased after post adding', () => {
    const result = profileReducer(initialState, addAction);
    expect(result.posts.length).toBe(3);
});

it('post message should be correct', () => {
    const result = profileReducer(initialState, addAction);
    expect(result.posts[2].message).toBe('This is test post');
});

it('posts length should be decreased after post deleting', () => {
    const result = profileReducer(initialState, deleteAction);
    expect(result.posts.length).toBe(1);
});