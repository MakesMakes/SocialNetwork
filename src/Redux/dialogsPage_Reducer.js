const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
    ]
}

const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.newMessageBody,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
            //stateCopy.messages.push(newMessage) - перенесли в let выше немного другим образом (push сегодня не юзается)
            //stateCopy.newMessageText = ''; - перенесли в let выше
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: 'SEND-MESSAGE', newMessageBody: newMessageBody })

export default dialogsPageReducer;