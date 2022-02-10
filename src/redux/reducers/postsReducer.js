const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

const initialState = {
    posts: [
        {id: 1, message: "Hello World!", likes: 5},
        {id: 2, message: "My first post...", likes: 12}
    ],
    newPostText: 'Enter post'
}

export const postsReducer = (state = initialState, action) => {

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

export const updateNewPostTextActionCreator = (payload) => {
    return { type: UPDATE_NEW_POST_TEXT, payload }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST };
}
