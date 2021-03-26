import { createStore, combineReducers }  from "redux";
import dialogsPageReducer from './dialogsPage_Reducer';
import profilePageReducer from './profilePage_Reducer';
import usersPageReducer from "./usersPage_Reducer";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer
});

let store = createStore(reducers);

export default store;

window.store = store; //в косоли ввод команды store.getState