import React from 'react';
import '../styles/RewardsFeed.css';
import profileIcon from "../assets/profile.svg"

const RewardsFeed = ({ rewardsInfo, rewardsMessage, date }) => (
  <div className="rewards-row">
    <img src={profileIcon} alt={rewardsInfo} className="profile-icon" />
    <div className="chat-text">
      <div className="name">{rewardsInfo}</div>
      <div className="message">{date}</div>
      <div>{rewardsMessage}</div>
    </div>
  </div>
);

export default RewardsFeed;
