import profilePageReducer from './profilePage_Reducer';
import dialogsPageReducer from './dialogsPage_Reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello, I am Maxim', likeCount: 12 },
                { id: 2, message: 'It\'s my first post', likeCount: 83 },
            ],
            newPostText: "alo eto AKA-47"
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Andrey', img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1d/1d8824774fe60418072441f4e6de2fca3ea5fa1b_full.jpg' },
                { id: 2, name: 'Valakas', img: 'https://avatanplus.com/files/resources/original/5d3173fac59b316c092d0bb9.png' },
                { id: 3, name: 'Kinch', img: 'https://cdn.freelance.ru/img/portfolio/pics/00/35/26/3483153.jpg?mt=4408aae2' },
                { id: 4, name: 'Vasya Voron', img: 'https://yt3.ggpht.com/a/AGF-l79mPFS2qUdPRLbnEU4ZuvqEIo8w_eupgFhRKQ=s900-c-k-c0xffffffff-no-rj-mo' },
                { id: 5, name: 'Denchik', img: 'https://yt3.ggpht.com/a/AATXAJyPeXJCsU5gzf7X5klg09ZMlRw1eWLcIxAJYA=s900-c-k-c0xffffffff-no-rj-mo' },
            ],
            messages: [
                { id: 1, message: 'I want Mercedes' },
                { id: 2, message: 'Ya hochy pizzi' },
                { id: 3, message: 'XZ' },
                { id: 4, message: 'KYSHAC' },
                { id: 5, message: 'MASKA' },
            ],
            newMessageText: "hello my friend"
        }
    },

    _callSubscriber() {
        console.log('State is change')
    },

    getState() {
        return this._state;
    },

    //паттерн; для перерисовки; чтобы избавится от цикличности импортов; также избавились от файла render
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }

}

export default store;

window.store = store;