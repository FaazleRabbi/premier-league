import React, { useState } from 'react';
import female from '../../Photo/female.png';
import male from '../../Photo/male.png';
import './TeamInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faRss,faPodcast, faFlag, faFutbol, faMale, faFemale, faMars} from '@fortawesome/free-solid-svg-icons';
import {faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
const TeamInfo = (props) => {
    
    console.log(props.team)
    const {strTeam,strTeamBanner,intFormedYear,strCountry,strGender,strSport,strDescriptionEN,strRSS,strTwitter,strYoutube} = props.team;
  
    console.log(strGender)
    let imgUrl = '';
    if (strGender === 'Male') {
        imgUrl =`${male}`
    }else if(strGender==='Female'){
        imgUrl =`${female}`
    }
    console.log(imgUrl)
    return (
        <div className='teamInfo text-white'>
            <img className='w-100' src={strTeamBanner} alt=""/>
            <div className='info'>
                <div className="text-center row shortInfo bg-primary mb-3 p-3n font-weight-bold align-item-center">
                    <div className = 'col-12 col-md-6  '>
                        <h1>{strTeam}</h1>
                        <h4><FontAwesomeIcon icon={faPodcast} /> Founded:{intFormedYear}</h4>
                        <h4><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                        <h4> <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport} </h4>
                        <h4><FontAwesomeIcon icon={faMars}  />Gender: {strGender} </h4>
                    </div>
                    <div className='col-12 col-md-6 d-flex justify-content-center'>
                        <img src={imgUrl} alt=""/>
                    </div>
                </div>
                <div>
                    <p>
                        {strDescriptionEN}
                    </p>
                </div>
                <div className="d-flex justify-content-center">
                    <a href={"https://"+strTwitter} className='social-icon' target='_black'> <FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={"https://"+strYoutube} className='social-icon ' target='_black'><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href={"https://"+strRSS} className='social-icon' target='_black'><FontAwesomeIcon icon={faRss} /></a>
                    
                </div>
            </div>
            
        </div>
    );
};

export default TeamInfo;