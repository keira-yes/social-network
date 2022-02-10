const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

export const updateNewPostTextActionCreator = (payload) => {
    return { type: UPDATE_NEW_POST_TEXT, payload }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST };
}

export const postsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.payload;
            return state;
        case ADD_POST:
            const posts = state.posts;
            const id = posts.length + 1;
            const newPost = {
                id,
                message: state.newPostText,
                likes: 0
            }
            posts.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}
