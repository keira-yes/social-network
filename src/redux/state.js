const store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log('rerender');
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {

        if (action.type === 'ADD_POST') {
            const posts = this._state.profilePage.posts;
            const id = posts.length + 1;

            const newPost = {
                id,
                message: this._state.profilePage.newPostText,
                likes: 0
            }

            posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribe(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.payload;
            this._callSubscribe(this._state);
        }
    }
}

export default store;
