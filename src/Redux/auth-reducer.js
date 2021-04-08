import { authAPI } from './../api/api';

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state=initialState, action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
            default:
                return state;
    }
}

export const setAuthUserDataActionCreator = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

export const authThunkCreator = () =>{
    return (dispatch) =>{
        authAPI.me().then(data =>{
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserDataActionCreator(id, email, login));
            }
        });
    }
}

export default authReducer