import React from "react";
import Profile from "./Profile";
import { setUserProfileThunkCreator } from './../../Redux/profilePage_Reducer';
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfile(userId)

  }

  render() {

    if (!this.props.isAuth) {
      return <Redirect to='/login' />
    }

    return (
      <Profile {...this.props} profile={this.props.profile} />

    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile: setUserProfileThunkCreator })(WithUrlProfileContainer);
