import React, {useEffect, useState, useRef} from "react"
import UserStats from "../components/UserStats"
import StocksList from "../components/StocksList"
import PortfolioList from "../components/PortfolioList";
import { getUsers, updateServer } from "../components/ServerService";
import { calculateIncrease } from "../components/Calculator";
import CurrencySelector from "../components/Currency Selector";

const StocksBox = () => {

    const [cryptos, setCryptos] = useState([]);
    const [activeUser, setActiveUser] = useState({portfolio: []})
    const [userPortfolio, setUserPortfolio] = useState([]);
    const [cashWallet, setCashWallet] = useState(0)
    const [investmentValue, setInvestmentValue] = useState(false)
    const [selectedCurrency, setSelectedCurrency] = useState(null)
    const [message, updateMessage] = useState(null)
    
    const first = useRef(true);

    useEffect(() => {
        const interval = setInterval(() => {
            getCryptos()
        }, 60);
        return () => clearInterval(interval);
      }, []); 
      // fetches the API every 60 seconds to update live the market prices

    useEffect(()=>
    {
        if (first.current)
        {
            first.current = false;
            return;
        }
        else if (activeUser.portfolio)
        {
            setInvestmentValue(calculateIncrease(activeUser.portfolio, cryptos));
        }
        }, [cryptos])
    

      const coinAmount = (coin, amount_usd) => {
        return amount_usd/coin.priceUsd
    }

 
    const addCrypto = ((item, amount) => {
        const newPortfolio = [... activeUser.portfolio]
        const newCoinObj = {coin:item, investment: amount, coin_amount: coinAmount(item, amount)}
        newPortfolio.push(newCoinObj);
        setUserPortfolio(newPortfolio);
        setCashWallet(activeUser.cash - amount)
        //adds crypto to user database and portfolio 
    })

    const sellCrypto = ((index) => {
        const newPortfolio = [... activeUser.portfolio]
        const removedCoin = newPortfolio.splice(index,1);
        const coinCurrentState = cryptos.find(crypto=> crypto.name === removedCoin[0].coin.name)
        const sellAmount = Number(coinCurrentState.priceUsd)*Number(removedCoin[0].coin_amount)
        setUserPortfolio(newPortfolio);
        setCashWallet(activeUser.cash + Number(sellAmount.toFixed(2)))
        // sell crypto and update database
    })

    const onCurrencySelect = ((currency) => {
        setSelectedCurrency(currency);
    })

    const handleMysteryCoin = ((array) => {
        const randomCoin = array[Math.floor(Math.random() * array.length)]
        if (randomCoin.name === selectedCurrency.name) {
            addMysteryCoin(randomCoin)
            updateMessage("Congratulations!")
        }  
        else {
            setCashWallet(activeUser.cash - 2000)
            updateMessage(`Sorry the mystery coin was ${randomCoin.name}.`)
        }
    })

    const addMysteryCoin = ((item) => {
        const newPortfolio = [... activeUser.portfolio] 
        const newCoinObj = {coin:item, investment:5000}
        newPortfolio.push(newCoinObj);
        setUserPortfolio(newPortfolio);
    })



    useEffect( ()=>
    {
        createUpdate();
        

    },[userPortfolio, cashWallet])
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
            <CurrencySelector cryptos={cryptos} onCurrencySelect={onCurrencySelect} handleMysteryCoin={handleMysteryCoin}/>
            {message}
            <PortfolioList portfolio={activeUser.portfolio} sellCrypto={sellCrypto} investmentValue={investmentValue}/>
            <StocksList cryptos={cryptos} addCrypto={addCrypto} cash={activeUser.cash}/>
        </>
    )
} 
export default StocksBox