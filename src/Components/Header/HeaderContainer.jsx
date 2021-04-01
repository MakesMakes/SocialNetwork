import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {setAuthUserDataActionCreator} from './../../Redux/auth-reducer'
import { getAuthAPI } from '../../api/api'

class HeaderContainer extends React.Component {
    componentDidMount(){
        getAuthAPI().then(data =>{
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setUserData(id, email, login);
            }
        });
    }


    render(){
        return <Header {...this.props} />
    }
}

const mapStateToProps=(state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default  connect(mapStateToProps, {setUserData: setAuthUserDataActionCreator})(HeaderContainer);