import { connect } from "react-redux"
import {
    followThunkCreator,
    unfollowThunkCreator,
    getUsersThunkCreator,
    getUsersCurrentPageThunkCreator
} from '../../Redux/usersPage_Reducer'
import React from 'react'
import Users from "./Users"
import loading from './../../images/loading.gif'
import { compose } from "redux"


class UsersContainer extends React.Component {

    //конструирование ниже происходит автоматически, его можно не писать
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        //использование thunk
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        //использование thunk
        this.props.getUsersCurrentPage(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <div>
                    <img src={loading} style={{ width: 100 }} />
                </div> : null}

            {/* передача данных и callbacks через props */}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}

                unfollow={this.props.unfollow}
                follow={this.props.follow} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID)) // это callback а не вызов
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID)) // это callback а не вызов
        },
        setusers: (users) => {
            dispatch(setUsersActionCreator(users)) // это callback а не вызов
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber)) // это callback а не вызов
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount)) // это callback а не вызов
        },
        isLoadingToggle: (isLoading) => {
            dispatch(isLoadingActionCreator(isLoading)) // это callback а не вызов
        }
    }
}
*/

export default compose(
    connect(mapStateToProps, {
        follow: followThunkCreator, // это callback а не вызов
        unfollow: unfollowThunkCreator, // это callback а не вызов
        getUsers: getUsersThunkCreator,
        getUsersCurrentPage: getUsersCurrentPageThunkCreator
    })
)(UsersContainer)

