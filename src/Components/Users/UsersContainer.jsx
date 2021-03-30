import { connect } from "react-redux";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, isLoadingActionCreator } from '../../Redux/usersPage_Reducer'
import axios from 'axios';
import React from 'react';
import Users from "./Users";
import loading from './../../images/loading.gif'


class UsersContainer extends React.Component {

    //конструирование ниже происходит автоматически, его можно не писать
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        this.props.isLoadingToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
    })
            .then(response => {
                this.props.isLoadingToggle(false);
                this.props.setusers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.isLoadingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
    })
            .then(response => {
                this.props.isLoadingToggle(false)
                this.props.setusers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isLoading ?
                <div>
                    <img src={loading} style={{ width: 100 }} />
                </div> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
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
        isLoading: state.usersPage.isLoading
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

export default connect(mapStateToProps, {
    follow: followActionCreator, // это callback а не вызов
    unfollow: unfollowActionCreator, // это callback а не вызов
    setusers: setUsersActionCreator, // это callback а не вызов
    setCurrentPage: setCurrentPageActionCreator, // это callback а не вызов
    setTotalUsersCount: setTotalUsersCountActionCreator, // это callback а не вызов
    isLoadingToggle: isLoadingActionCreator // это callback а не вызов
})(UsersContainer);

