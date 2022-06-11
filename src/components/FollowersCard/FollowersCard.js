import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/Data";

const FollowersCard = () => {
  return (
    <div className="followerscard">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="followers">
              <div>
            <img src={follower.img} alt="" className="followersimage" />
            <div className="name">
              <span>{follower.name}</span>
              <span>{follower.username}</span>
            </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
