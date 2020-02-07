let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hello Mark", like: "like 14"},
                {id: 2, message: "My first post", like: "like 93"},
                {id: 2, message: "My first post", like: "like 93"},
                {id: 2, message: "My first post", like: "like 93"}
            ],
            newPostText: 'it ka'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hello!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Are you at home?"}
            ],
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Ann"},
                {id: 3, name: "Alice"}
            ],
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state изменился');
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText ,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber  = observer;
    }
}


export default store;
window.store = store;
