import React from "react";
import { LBC } from "./Calculator";

const Leaderboard = ({allUsers, cryptos, activeUser})=>
{

const userRanks = allUsers.map(user=>
    {
        return LBC(user, cryptos)
    })
const sortRanks = userRanks.sort((a,b)=>
{
    
    return b.equity - a.equity
})

const leaderBoard = sortRanks.map(rank=>
    {
        if(rank.name === activeUser.name)
        {
            return <li><strong >{rank.name}  ${rank.equity.toFixed(2)}<span>&#8592;</span></strong></li>
        }
        else
        {
            return <li>{rank.name}  ${rank.equity.toFixed(2)}</li>
        }
    })


    return(
        <ol>
            {leaderBoard}
        </ol>
    )
}

export default Leaderboard;