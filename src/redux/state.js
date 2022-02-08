import { rerender } from "../rerender";

export const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello World!", likes: 5},
            {id: 2, message: "My first post...", likes: 12}
        ],
        newPostText: 'Enter post'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Name 1"},
            {id: 2, name: "Name 2"},
            {id: 3, name: "Name 3"},
            {id: 4, name: "Name 4"},
            {id: 5, name: "Name 5"},
            {id: 6, name: "Name 6"}
        ],
        messages: [
            {id: 1, message: "Hi world"},
            {id: 2, message: "How are you doing"},
            {id: 3, message: "Miss you"}
        ]
    }
}

export const addPost = () => {
    const posts = state.profilePage.posts;
    const id = posts.length + 1;

    const newPost = {
        id,
        message: state.profilePage.newPostText,
        likes: 0
    }

    state.profilePage.newPostText = '';
    posts.push(newPost);
    rerender(state);
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerender(state);
}
