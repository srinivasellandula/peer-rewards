import React from "react";
import profile from '../assets/profile.svg'

const RewardsProfile = () => {
    return (
        <div className="rewards-container">
            <div>
                <div className="alignCenter">
                    <img src={profile} className="profile-icon" alt="logo" />
                </div>
                <div> Srinivas Ellandula</div>
            </div>
            <div>
                <div>My Rewards</div>
                <div>$250</div>
            </div>
            <div>
                <div>Give</div>
                <div>$100</div>
            </div>
        </div>
       
    )
};

export default RewardsProfile;