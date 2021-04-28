import { profileAPI } from './../api/api';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'Hello, I am Maxim', likeCount: 12 },
        { id: 2, message: 'It\'s my first post', likeCount: 83 },
    ],
    newPostText: "alo eto AKA-47",
    profile: null,
    status: ""
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
export const setUserProfileActionCreator = (profile) => ({ type: 'SET_USER_PROFILE', profile })
export const setStatusActionCreator = (status) => ({type: 'SET_STATUS', status})

export const setUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileActionCreator(data));
          })
    }
}

export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            
        debugger;
            dispatch(setStatusActionCreator(data));
          })
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode === 0)
            dispatch(setStatusActionCreator(status));
          })
    }
}

export default profilePageReducer;