import React, { useEffect,useState } from "react";
import dp from "../../img/dp.png";
import bc from "../../img/bc.png";
import "./ProfileCard.css";
import { Link ,useLocation} from "react-router-dom";

const ProfileCard = () => {

  const location = useLocation();
  const [profilePage,setProfilePage] = useState(false);

  useEffect(()=>{
    location.pathname.includes("profile")? setProfilePage(true): setProfilePage(false);
  },[location.pathname]);



  return (
    <div className="profilecard">
      <div className="profileimage">
        <img src={bc} alt="" />
        <img src={dp} alt="" />
      </div>
      <div className="profilename">
        <span>Sabuj Biswas</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followstatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,973</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>10</span>
            <span>Followers</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? (
        ""
      ) : (
        <span>
          <Link to={"profile"}>My Profile</Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
