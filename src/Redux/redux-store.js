import { createStore, combineReducers, applyMiddleware }  from "redux";
import authReducer from "./auth-reducer";
import dialogsPageReducer from './dialogsPage_Reducer';
import profilePageReducer from './profilePage_Reducer';
import usersPageReducer from "./usersPage_Reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store; //в косоли ввод команды store.getState