import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, ExitToApp } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";

export default function Topbar() {
  const dispatch = useDispatch();
  const logOutPress = () => {
    dispatch(logout());
    window.location.href = "https://fluffy-sopapillas-e80ba6.netlify.app/login";
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Women's Fashion</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <ExitToApp onClick={logOutPress} />
          </div>
          <img src="https://gravatar.com/avatar/088f07bdd6c610288af7a2b072dfd8c3?s=400&d=robohash&r=x" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
