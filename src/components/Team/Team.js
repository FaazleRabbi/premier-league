import React from 'react';
import { useHistory } from 'react-router';
import './Team.css'

const Team = (props) => {
    console.log(props.team)
    const {strTeam,strTeamBadge,idTeam}=props.team;
    const history = useHistory();
    const handleTeamInfoBtn =(idTeam)=>{
        history.push(`/team/${idTeam}`)
    }
    return (
        <div className='team col-12 col-md-4 p-3'>
            <img   src={strTeamBadge} alt=""/>
            <h3 >{strTeam}</h3>
            <button  onClick={()=> handleTeamInfoBtn(idTeam)} className='btn btn-info'>See Details</button>
        </div>
    );
};

export default Team;