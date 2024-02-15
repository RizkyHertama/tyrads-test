import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt, faBell, faClock, faUsers, faWallet, faComments } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

function SidebarLeft({ author }) {
  return (
    <div className="sidebar">

      <div className="icon-chat-container">

        <div className="icon-chat"><FontAwesomeIcon icon={faComments} /></div>
      </div>

      <div className="icon-container">
        <div className="icon-home"><FontAwesomeIcon icon={faHome} /></div>
        <div className="icon"><FontAwesomeIcon icon={faBell} /></div>
        <div className="icon"><FontAwesomeIcon icon={faClock} /></div> 
        <div className="icon"><FontAwesomeIcon icon={faUsers} /></div>
        <div className="icon"><FontAwesomeIcon icon={faWallet} /></div>
        <div className="icon"><FontAwesomeIcon icon={faCog} /></div>
      </div>

      <div className="profile">
    
        <div className="profile-photo" style={{backgroundImage: `url(https://www.rizkyhertama.my.id/assets/Rizkyhertama-68f0e3b5.webp)`}}></div>
      
        <div className="logout-icon"><FontAwesomeIcon icon={faSignOutAlt} /></div>
      </div>
    </div>
  );
}

export default SidebarLeft;