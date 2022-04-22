import React, {useEffect, useState} from "react"
import UserStats from "../components/UserStats"
import StocksList from "../components/StocksList"

const StocksBox = () => {

    const [cryptos, setCryptos] = useState([]);

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
            <StocksList cryptos={cryptos}/>
        </>
    )
} 
export default StocksBox