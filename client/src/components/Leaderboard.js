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

            return <li><strong class="user">{rank.name}  ${rank.equity.toFixed(2)}<span>&#8592;</span></strong></li>
        }
        else
        {
            return <li>{rank.name}  ${rank.equity.toFixed(2)}</li>

        }
    })


    return(
       

        <div id="leaderboard2"> 
        <h2 class="leaderboard-title"><img src={require("./css/bitcoin.gif")} height="60" class="coin-image"/>Leaderboard<img src={require("./css/bitcoin.gif")} height="70" class="coin-image"/></h2>
        <ol>
            {leaderBoard}
        </ol></div>
    )
}

export default Leaderboard;