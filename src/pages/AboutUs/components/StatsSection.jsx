import React from 'react'
import './StatsSection.css';
import Building from "../../../assets/images/building.png";
import Globe from "../../../assets/images/globe.png";
import Hand from "../../../assets/images/hand.png";
import User from "../../../assets/images/user.png";
import Card from "../../../components/card/Card";
import Data from "../../../data/AboutUsData";

function createCard(data){
  return(
    <Card
      key = {data.id}
      link = {data.imgURL}
      name = {data.name}
    />
  )
}


function StatsSection() {

  return (
  
    <div class="main">

      <div className="stats">
        {Data.map(createCard)}
      </div>
      
      
      {/* <div class="li-container">
        <div class="li">
          <div class="imgtxt-container">
            <img class="imgcon" src={Building} alt="" />
            <div class="img-txt">50,000+</div>
          </div>
          <div class="imgtxt-container">
            <img  class="imgcon" src={Hand} alt="" />
            <div class="img-txt">10,000+</div>
          </div>
        </div>
        <div class="li liRight">
          <div class="imgtxt-container">
            <img class="imgcon" src={User} alt="" />
            <div class="img-txt">43,850</div>
          </div>
          <div class="imgtxt-container">
            <img class="imgcon" src={Globe} alt="" />
            <div class="img-txt">12</div>
          </div>        
        </div>
      </div> */}
       <div class="video-p1">
        <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2006242/sp/200624200/embedIframeJs/uiconf_id/32026212/partner_id/2006242?iframeembed=true&playerId=kaltura_player&entry_id=1_dh8w0mac&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_sx57bihq" width="500" height="281" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *"  frameborder="0" title="Chameleon Company Projects Showcase (T1 2022)"></iframe>
      </div>
    </div>
  
  )
}

export default StatsSection