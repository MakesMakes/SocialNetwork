const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const IS_LOADING_ON = "IS_LOADING_ON"

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isLoading: false
};

const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //две идентичные записи: users: [...state.users] и users: state.users.map(u=>u)
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, follow: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                //две идентичные записи: users: [...state.users] и users: state.users.map(u=>u)
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, follow: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            // для отображения пользователей из бд (на будущее)
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
        case IS_LOADING_ON:
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const followActionCreator = (userID) => ({ type: FOLLOW, userID })
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({ type: SET_USERS_COUNT, totalUsersCount })
export const isLoadingActionCreator = (isLoading) => ({ type: IS_LOADING_ON, isLoading})


export default usersPageReducer;