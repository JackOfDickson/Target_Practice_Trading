import React, {useEffect, useState} from "react"
import UserStats from "../components/UserStats"
import StocksList from "../components/StocksList"
import PortfolioList from "../components/PortfolioList";

const StocksBox = () => {

    const [cryptos, setCryptos] = useState([]);
    const [userPortfolio, setUserPortfolio] = useState([]);

    const addCrypto = (coin => {
        const newPortfolio = [... userPortfolio]
        newPortfolio.push(coin)
        setUserPortfolio(newPortfolio)
        //adds to database later
    })

    const sellCrypto = ((coin, index) => {
        const newPortfolio = [... userPortfolio]
        newPortfolio.splice(index,1)
        setUserPortfolio(newPortfolio)
    })


    useEffect( ()=>
    {
        getCryptos();

    },[])

    const getCryptos = function (items=100) { // Fetch 100 items by default        
        fetch ('https://api.coincap.io/v2/assets')            
        .then (response => response.json())            
        .then (result => setCryptos (result.data.slice(0,items)));   
     };


    return (
        <>
            <h1>Stocks Box</h1>
            <UserStats/>
            <PortfolioList userPortfolio={userPortfolio} sellCrypto={sellCrypto}/>
            <StocksList cryptos={cryptos} addCrypto={addCrypto}/>
        </>
    )
} 
export default StocksBox