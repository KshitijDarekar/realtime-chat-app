import React from 'react';
import './infobar.css';
import closeIcon from  '../assets/close.png';
import logout from  '../assets/logout.svg';
const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="left-inner-container">
            <h3>{room}</h3>
    </div>
    <div className="right-inner-container">
      <a href="/">
        <img  className="onlineIcon"  src={logout} alt="close icon" />
      </a> 
    </div>
  </div>
);

export default InfoBar;