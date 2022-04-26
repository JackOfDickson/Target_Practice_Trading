import React from "react";
import { LBC } from "./Calculator";

const Leaderboard = ({allUsers, cryptos})=>
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
        return <li>{rank.name}  ${rank.equity}</li>
    })


    return(
        <ol>
            {leaderBoard}
        </ol>
    )
}

export default Leaderboard;