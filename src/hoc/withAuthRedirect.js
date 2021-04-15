import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {

        if (!props.isAuth) {
            return <Redirect to='/login' />
        }
        return <Component {...props} /> // все пропсы перекидываем дальше (деструктуризация); тип они этой контейнерной компоненте не нужны
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectAuthRedirectComponent;
}