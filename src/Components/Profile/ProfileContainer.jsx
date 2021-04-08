import React from "react";
import Profile from "./Profile";
import { setUserProfileThunkCreator } from './../../Redux/profilePage_Reducer';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

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

let WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile: setUserProfileThunkCreator })(WithUrlProfileContainer);
