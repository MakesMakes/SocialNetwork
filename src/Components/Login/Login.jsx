import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from "redux-form";
import { Input } from '../../FormsControls/FormsControls';
import { loginThunkCreator } from '../../Redux/auth-reducer';
import { required } from './../../validators/validators';
import style from './../../FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"} name={"password"} component={Input}  validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return(
            <Redirect to={"/profile"} />
        )
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
    

export default connect(mapStateToProps, {login: loginThunkCreator})(Login)