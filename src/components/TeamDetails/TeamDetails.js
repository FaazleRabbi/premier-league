import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamInfo from '../TeamInfo/TeamInfo';
import './TeamDetails.css'

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [teamDetails,setTeamDetails] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url).then(res=>res.json()).then(data=>setTeamDetails(data.teams[0]))
    },[idTeam])
    return (
        <div>
            <TeamInfo team = {teamDetails}></TeamInfo>
        </div>
    );
};

export default TeamDetails;