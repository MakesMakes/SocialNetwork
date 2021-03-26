import React from "react";
import style from "./ProfileInfo.module.css";
import loading from './../../../images/loading.gif'

const ProfileInfo = (props) => {

  if(!props.profile){
    return  <div>
    <img src={loading} />
</div>
  }

  return (
    <div>
      <div className={style.img}>
        <img src="https://i.pinimg.com/originals/65/71/9f/65719f9e1dee16fa7ed834f30d55eece.png" />
      </div>
      <div className={style.avatarDesc}>
        <img src={props.profile.photos.large}/>
        Avatar + description
        </div>
    </div>
  );
};

export default ProfileInfo;
