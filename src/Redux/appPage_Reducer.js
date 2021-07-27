import { authThunkCreator } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializeSuccessActionCreator = () => ({ type: 'INITIALIZED_SUCCESS' });

export const initializeSuccessThunkCreator = () => (dispatch) => {
    let promise = dispatch(authThunkCreator());

    Promise.all([promise])
        .then(() => {
            dispatch(initializeSuccessActionCreator());
        });
}

export default appReducer;