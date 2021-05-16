
import { usersAPI } from './../api/api';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //две идентичные записи: users: [...state.users] и users: state.users.map(u=>u)
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //две идентичные записи: users: [...state.users] и users: state.users.map(u=>u)
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
                //filter возвращает новый массив => копия (деструктуризация не нужна)
            }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({ type: SET_USERS_COUNT, totalUsersCount })
export const toggleIsFetchingActionCreator = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgressActionCreator = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

//диспатчим не actionCreator, которые возвращают объект, а диспатчим thunkCreator, который возвращает функцию 
export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(toggleIsFetchingActionCreator(false));
            dispatch(setUsersActionCreator(data.items));
            dispatch(setTotalUsersCountActionCreator(data.totalCount));
        })
    }
}

//диспатчим не actionCreator, которые возвращают объект, а диспатчим thunkCreator, который возвращает функцию 
export const getUsersCurrentPageThunkCreator = (pageNumber, pageSize) => {

    return (dispatch) => {
        dispatch(setCurrentPageActionCreator(pageNumber));
        dispatch(toggleIsFetchingActionCreator(true))

        usersAPI.getUsers(pageNumber, pageSize).then(data => {

            dispatch(toggleIsFetchingActionCreator(false))
            dispatch(setUsersActionCreator(data.items))
        })
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressActionCreator(true, userId));

        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowActionCreator(userId));
            }

            dispatch(toggleFollowingProgressActionCreator(false, userId));
        }
        )}
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressActionCreator(true, userId));

        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followActionCreator(userId));
            }

            dispatch(toggleFollowingProgressActionCreator(false, userId));
        }
        )}
}

export default usersPageReducer;