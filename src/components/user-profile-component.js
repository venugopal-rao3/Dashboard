import React from 'react';
import './user-profile-component.css'

const UserProfile = (props) => {
    return(
        <div className="user-profile">
            <img className="user-profile--notification" src='/images/Group 10.svg'/>
            <img className="user-profile--avatar" src= "/images/profile.svg"/>
        </div>
    )
}
export default UserProfile;