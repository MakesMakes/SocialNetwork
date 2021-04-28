import React from "react";
import style from "./ProfileInfo.module.css";
import loading from './../../../images/loading.gif'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <div className={style.loading}>
      <img src={loading} />
    </div>
  }

  return (
    <div className={style.profileInfo}>
      <div className={style.img}>
        <img src="https://i.pinimg.com/originals/65/71/9f/65719f9e1dee16fa7ed834f30d55eece.png" />
      </div>
      <div className={style.avatarDesc}>
        <img src={props.profile.photos.large} />
        <div>Name: {props.profile.fullName}</div>
        <div>Job: {props.profile.lookingForAJobDescription}</div>
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
