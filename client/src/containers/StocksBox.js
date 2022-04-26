import React, {useEffect, useState, useRef} from "react"
import UserStats from "../components/UserStats"
import StocksList from "../components/StocksList"
import PortfolioList from "../components/PortfolioList";
import { getUsers, updateServer } from "../components/ServerService";
import { calculateIncrease } from "../components/Calculator";
import CurrencySelector from "../components/Currency Selector";

const StocksBox = () => {

    const [cryptos, setCryptos] = useState([]); // Saves all cryptos from API into useState
    const [activeUser, setActiveUser] = useState({portfolio: []}) // useState for the active user
    const [userPortfolio, setUserPortfolio] = useState([]); // Used to trigger useEffect calls
    const [cashWallet, setCashWallet] = useState(0) // Stores the balance for user after transaction
    const [investmentValue, setInvestmentValue] = useState(false) // Current/Live value of crypto investment in US Dollars
    const [selectedCurrency, setSelectedCurrency] = useState(null) // Stores the currently selected crypto when playing mystery coin
    const [message, updateMessage] = useState(null) // Displays message to communicate result of mystery coin
    const [searchTerm, setSearchTerm] = useState(''); // Saves the current search field in search box
    const [fetchUser, setFetchUser] = useState(false)
    // const [counter, setCounter] = useState(0)//counter for testing purposes
    
    const first = useRef(true);
    const activateDelay = useRef(false)

    useEffect(() => {
        if(activateDelay.current === false)
        {
            getCryptos()
            activateDelay.current = true;
        }
        else
        {
            const interval = setInterval(() => {
                getCryptos()  
            }, 10000);
            return () => clearInterval(interval);
        }
    }, []); 
      // fetches the API every 10 seconds to update live the market prices
    
    // code below is for testing purposes, to see how many times the api data was fetched.
    // useEffect(()=>
    // {
    //     setCounter(counter + 1)
    // }, [cryptos])
    
    // function to caluclate live value of crypto investment 
    // Only executes when a crypto is purchased, sold or won
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

    useEffect(()=>
    {
        getUsers()
        .then((re)=> setActiveUser(re[0]))
    }, [fetchUser])
    
        
    // Takes in crypto purchased and investment amount
    // Returns quantity of cryptocurrency purchased
      const coinAmount = (coin, amount_usd) => {
        return amount_usd/coin.priceUsd
    }


    const addCrypto = ((item, amount, cost) => {
        const newPortfolio = [... activeUser.portfolio]
        const newCoinObj = {coin:item, investment: amount, coin_amount: coinAmount(item, amount)}
        newPortfolio.push(newCoinObj);
        setUserPortfolio(newPortfolio);
        setCashWallet(activeUser.cash - cost)
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

    // Sets selected currency for mystery game from currency selection dropdown 
    const onCurrencySelect = ((currency) => {
        setSelectedCurrency(currency);
    })

    // Mystery game function which determines whether the player wins or loses
    const handleMysteryCoin = ((array) => {
        if (activeUser.cash >= 2000) { // Check user has funds to play the game

        const randomCoin = array[Math.floor(Math.random() * array.length)]
        if (randomCoin.name === selectedCurrency.name) {
            addMysteryCoin(randomCoin)
            updateMessage("Congratulations!")
        }  
        else {
            setCashWallet(activeUser.cash - 2000)
            updateMessage(`Sorry the mystery coin was ${randomCoin.name}.`)
        }

        } else { // If user does not have sufficient funds to play the game

            updateMessage("Sorry, you do not have sufficent funds to gamble on our mystery coin!")
        }

    })

    // If player wins the game, add investment to their portfolio
    const addMysteryCoin = ((item) => {
        addCrypto(item, 5000, 0)
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
     }; // fetches API and users from database and update the corresponding states


     const createUpdate = ()=>
     {
         const updatedUser={
             name: activeUser.name,
             email: activeUser.email,
             cash: cashWallet,
             portfolio: userPortfolio
         }
         updateServer(updatedUser, activeUser._id)
         setFetchUser(!fetchUser)
    }// creates the updated user object and pushes is to the database
     

        // This function updates the useState searchTerm with the text in the search box
        const searchCryptos = (searchTerm) => {
            setSearchTerm(searchTerm); // Update searchTerm useState
        };

    return (
        <>
            <UserStats activeUser={activeUser} investmentValue={investmentValue}/> 
            <div class='portfolio-container'><PortfolioList portfolio={activeUser.portfolio} sellCrypto={sellCrypto} investmentValue={investmentValue} cash={activeUser.cash}/></div>
            
            <StocksList cryptos={cryptos} addCrypto={addCrypto} cash={activeUser.cash} searchCryptos={searchCryptos} searchTerm={searchTerm}/>
            <CurrencySelector cryptos={cryptos} onCurrencySelect={onCurrencySelect} handleMysteryCoin={handleMysteryCoin} message={message}/>
            </>
    )
} 
export default StocksBox