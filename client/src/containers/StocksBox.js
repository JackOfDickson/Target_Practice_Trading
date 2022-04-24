import React, {useEffect, useState} from "react"
import UserStats from "../components/UserStats"
import StocksList from "../components/StocksList"
import PortfolioList from "../components/PortfolioList";
import { getUsers, updateServer } from "../components/ServerService";

const StocksBox = () => {

    const [cryptos, setCryptos] = useState([]);
    const [activeUser, setActiveUser] = useState({portfolio: []})
    const [userPortfolio, setUserPortfolio] = useState([]);
    const [cashWallet, setCashWallet] = useState(0)
    

    useEffect(() => {
        const interval = setInterval(() => {
            getCryptos();
        }, 60);
        return () => clearInterval(interval);
      }, []); 
      // fetches the API every 60 seconds to update live the market prices


 
    const addCrypto = ((item, amount) => {
        const newPortfolio = [... activeUser.portfolio]
        const newCoinObj = {coin:item, investment: amount}
        newPortfolio.push(newCoinObj);
        setUserPortfolio(newPortfolio);
        setCashWallet(activeUser.cash - amount)
        //adds crypto to user database and portfolio 
    })

    const sellCrypto = ((index, investment) => {
        const newPortfolio = [... activeUser.portfolio]
        newPortfolio.splice(index,1);
        setUserPortfolio(newPortfolio);
        setCashWallet(activeUser.cash + investment)
        // sell crypto and update database
    })

    


    useEffect( ()=>
    {
        createUpdate();
        

    },[userPortfolio])
    // calls the create update every time the user buys or sells crypto to push to database



    const getCryptos = function (items=100) { // Fetch 100 items by default        
        fetch ('https://api.coincap.io/v2/assets')            
        .then (response => response.json())            
        .then (result => setCryptos (result.data.slice(0,items)))
        .then(()=> getUsers()
        .then((re)=> setActiveUser(re[0])))
     };
     // fetches API and users from database and update the corresponding states

     const createUpdate = ()=>
     {
         const updatedUser={
             name: activeUser.name,
             email: activeUser.email,
             cash: cashWallet,
             portfolio: userPortfolio
         }
         updateServer(updatedUser, activeUser._id)
    }
    // creates the updated user object and pushes is to the database
     


    return (
        <>
            <UserStats cash={activeUser.cash}/>
            <PortfolioList portfolio={activeUser.portfolio} sellCrypto={sellCrypto}/>
            <StocksList cryptos={cryptos} addCrypto={addCrypto} cash={activeUser.cash}/>
        </>
    )
} 
export default StocksBox