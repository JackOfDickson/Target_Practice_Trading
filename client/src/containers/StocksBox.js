import React, {useEffect, useState} from "react"
import UserStats from "../components/UserStats"
import StocksList from "../components/StocksList"
import PortfolioList from "../components/PortfolioList";
import { getUsers, updateServer } from "../components/ServerService";

const StocksBox = () => {

    const [cryptos, setCryptos] = useState([]);
    const [activeUser, setActiveUser] = useState({portfolio: []})
    const [userPortfolio, setUserPortfolio] = useState([]);
    const [cashWallet, setCashWallet] = useState(10000)
    

 
    const addCrypto = ((item, amount) => {
        const newPortfolio = [... activeUser.portfolio]
        const newCoinObj = {coin:item, investment: amount}
        newPortfolio.push(newCoinObj);
        setUserPortfolio(newPortfolio);
        setCashWallet(activeUser.cash - amount)
        //adds to database later
    })

    const sellCrypto = ((index, investment) => {
        const newPortfolio = [... activeUser.portfolio]
        newPortfolio.splice(index,1);
        setUserPortfolio(newPortfolio);
        setCashWallet(activeUser.cash + investment)
        
    })

  

    useEffect( ()=>
    {
        getCryptos();

    },[])

    useEffect(()=>
    {
        createUpdate();
        getUsers()
        .then((re)=>
        {
            setActiveUser(re[0])
            
        })
    },[cashWallet, userPortfolio])



    const getCryptos = function (items=100) { // Fetch 100 items by default        
        fetch ('https://api.coincap.io/v2/assets')            
        .then (response => response.json())            
        .then (result => setCryptos (result.data.slice(0,items)));   
     };

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
 


    return (
        <>
            <h1>Stocks Box</h1>
            <UserStats cashWallet={cashWallet}/>
            <PortfolioList userPortfolio={activeUser.portfolio} sellCrypto={sellCrypto}/>
            <StocksList cryptos={cryptos} addCrypto={addCrypto} cashWallet={activeUser.cash}/>
        </>
    )
} 
export default StocksBox