import React, { useState } from "react";
import Home from "../../img/home.png";
import noti from "../../img/noti.png";
import comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {

  const [modalOpen,setModalOpen] = useState(false);

  return (
    <div className="rightside">
      <div className="navicons">
        <img src={Home} alt="" />
        <img src={noti} alt="" />
        <img src={comment} alt="" />
        <UilSetting />
      </div>
      <TrendCard />

      <button className="button r-button" onClick={()=>setModalOpen(true)}>
          Share</button> 
          <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
};

export default RightSide;
