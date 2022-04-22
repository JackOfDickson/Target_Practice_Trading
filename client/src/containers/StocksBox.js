import React, {useEffect, useState} from "react"
import UserStats from "../components/UserStats"
import StocksList from "../components/StocksList"
import PortfolioList from "../components/PortfolioList";
import { getUsers, updateServer } from "../components/ServerService";

const StocksBox = () => {

    const [cryptos, setCryptos] = useState([]);
    const [activeUser, setActiveUser] = useState(null)
    const [userPortfolio, setUserPortfolio] = useState([]);
    const [cashWallet, setCashWallet] = useState(10000)
    

    const createUpdate = ()=>
    {
        const updatedUser = 
        {
            name: activeUser.name,
            email: activeUser.email,
            cash: cashWallet,
            portfolio: userPortfolio
        }
        updateServer(updatedUser, activeUser._id)
    }

    const addCrypto = ((item, amount) => {
        const newPortfolio = [... userPortfolio]
        const newCoinObj = {coin:item, investment: amount}
        newPortfolio.push(newCoinObj);
        setUserPortfolio(newPortfolio);
        setCashWallet(cashWallet - amount);
        createUpdate();
        //adds to database later
    })

    const sellCrypto = ((index, investment) => {
        const newPortfolio = [... userPortfolio]
        newPortfolio.splice(index,1);
        setUserPortfolio(newPortfolio);
        setCashWallet(cashWallet + investment);
        createUpdate();
    })

  

    useEffect( ()=>
    {
        getCryptos();
        getUsers()
        .then((re)=>
        {
            setActiveUser(re[0])
            setCashWallet(re[0].cash)
            setUserPortfolio(re[0].portfolio)
        })

    },[])

    const getCryptos = function (items=100) { // Fetch 100 items by default        
        fetch ('https://api.coincap.io/v2/assets')            
        .then (response => response.json())            
        .then (result => setCryptos (result.data.slice(0,items)));   
     };


    return (
        <>
            <h1>Stocks Box</h1>
            <UserStats cashWallet={cashWallet}/>
            <PortfolioList userPortfolio={userPortfolio} sellCrypto={sellCrypto}/>
            <StocksList cryptos={cryptos} addCrypto={addCrypto} cashWallet={cashWallet}/>
        </>
    )
} 
export default StocksBox