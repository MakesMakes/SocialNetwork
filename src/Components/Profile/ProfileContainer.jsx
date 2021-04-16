import React from "react";
import Profile from "./Profile";
import { setUserProfileThunkCreator } from './../../Redux/profilePage_Reducer';
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom'
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfile(userId)

  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />

    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default compose(
  connect(mapStateToProps, { setUserProfile: setUserProfileThunkCreator }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)



