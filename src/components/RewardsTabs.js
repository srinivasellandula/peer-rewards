import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import SendReward from '../components/SendReward';
import RewardsFeed from '../components/RewardsFeed';

import '../styles/tabs.css';

const RewardsTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => toggle("1")}
            >
              <b>Feed</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => toggle("2")}
            >
            <b>My Rewards</b>
            </NavLink>
          </NavItem>
        </Nav>
        <div className="adjust-position"><SendReward /></div> 

      </div>
      <TabContent>
        {
          activeTab === "1" ? 
          <TabPane tabId="1">
           <RewardsFeed
              rewardsInfo="Rajesh rewarded by Srinivas Ellandula"
              date="2hrs ago"
              rewardsMessage="Thank you for your help and it means a lot"
           />
            <RewardsFeed
              rewardsInfo="Chandu rewarded by Srinivas Ellandula"
              rewardsMessage="I am always greatful for this kind gesture from you. God bless you."
              date="14th Dec 2022"
           />
        </TabPane>
          :
          <TabPane tabId="2">
             <RewardsFeed
              date="1hr ago"
              rewardsInfo="Shiva Kumar rewarded me"
              rewardsMessage="Much love to you"
           />
        </TabPane>
        }
       
      
      </TabContent>

    </div>
  );
};

export default RewardsTabs;
