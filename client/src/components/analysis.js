import { useState, useEffect} from 'react';
import './css/Analysis.css';
import { Chart } from "react-google-charts";

const Analysis = () => {

    // Define useState array for cryptocurrencies
    const [bitcoinAnalysis, setBitcoinAnalysis] = useState([]); // Set Bitcoin useState
    const [ethereumAnalysis, setEthereumAnalysis] = useState([]); // Set Ethereum useState
    const [binanceAnalysis, setBinanceAnalysis] = useState([]); // Set Binance Coin useState

    // Create useEffect for using API
    useEffect ( ()  => {
        getBitcoinHistory();
        getEthereumHistory();
        getBinanceHistory();
    }, []);

    // API URLs
    const listAPI = {
        bitcoin: 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1',
        ethereum: 'https://api.coincap.io/v2/assets/ethereum/history?interval=d1',
        binance: 'https://api.coincap.io/v2/assets/binance-coin/history?interval=d1'
    }

    // Fetch price history of Bitcoin using API
    const getBitcoinHistory = function () { 
        fetch (listAPI.bitcoin)
            .then (response => response.json())
            .then (result => {setBitcoinAnalysis(result.data.reverse().slice(0,200)) // Reverse function used as API places new data at end and slice function used to limit array to a defined number of items
            }); 
    };
    // Fetch price history of Ethereum using API
    const getEthereumHistory = function () { 
        fetch (listAPI.ethereum)
            .then (response => response.json())
            .then (result => {setEthereumAnalysis(result.data.reverse().slice(0,200)) // Reverse function used as API places new data at end and slice function used to limit array to a defined number of items
        }); 
    };
    // Fetch price history of Binance Coin using API
    const getBinanceHistory = function () { 
        fetch (listAPI.binance)
            .then (response => response.json())
            .then (result => {setBinanceAnalysis(result.data.reverse().slice(0,200)) // Reverse function used as API places new data at end and slice function used to limit array to a defined number of items
        });   
    };

    // Format Bitcoin API data for Charts
    let bitcoinDataMap=[];
    bitcoinAnalysis.map( crypto => {
        const initialDate = crypto.date.split("T") // Split date stamp at timeline
        const dateTemp = initialDate[0]; // Capture date part of date stamp
        const formattedDate = new Date(dateTemp); // Put into correct date format to make Google happy!
        const priceTemp=parseFloat(crypto.priceUsd); // Change price to float
        const coinInfo = {
            date: formattedDate,
            price: priceTemp
        } ;
        bitcoinDataMap.push(coinInfo);
    });

    // Build Chart Data for Bitcoin
    let bitcoinData = [["Year", "Price"]];
    bitcoinDataMap.map( crypto => {
        const coinInfo=[crypto.date, crypto.price];
        bitcoinData.push(coinInfo);
    });

    const bitcoinOptions = {
        title: "Bitcoin Price (USD)",
        curveType: "function",
        legend: { position: "bottom" },
    };

    // Format Ethereum API data for Charts
    let ethereumDataMap=[];
    ethereumAnalysis.map( crypto => {
        const initialDate = crypto.date.split("T") // Split date stamp at timeline
        const dateTemp = initialDate[0]; // Capture date part of date stamp
        const formattedDate = new Date(dateTemp); // Put into correct date format to make Google happy!
        const priceTemp=parseFloat(crypto.priceUsd); // Change price to float
        const coinInfo = {
            date: formattedDate,
            price: priceTemp
        } ;
        ethereumDataMap.push(coinInfo);
    });

    // Build Chart Data for Ethereum
    let ethereumData = [["Year", "Price"]];
    ethereumDataMap.map( crypto => {
        const coinInfo=[crypto.date, crypto.price];
        ethereumData.push(coinInfo);
    });

    const ethereumOptions = {
        title: "Ethereum Price (USD)",
        curveType: "function",
        legend: { position: "bottom" },
    };
    
    // Format Binance Coin API data for Charts
    let binanceDataMap=[];
    binanceAnalysis.map( crypto => {
        const initialDate = crypto.date.split("T") // Split date stamp at timeline
        const dateTemp = initialDate[0]; // Capture date part of date stamp
        const formattedDate = new Date(dateTemp); // Put into correct date format to make Google happy!
        const priceTemp=parseFloat(crypto.priceUsd); // Change price to float
        const coinInfo = {
            date: formattedDate,
            price: priceTemp
        } ;
        binanceDataMap.push(coinInfo);
    });

    // Build Chart Data for Binance Coin
    let binanceData = [["Year", "Price"]];
    binanceDataMap.map( crypto => {
        const coinInfo=[crypto.date, crypto.price];
        binanceData.push(coinInfo);
    });

    const binanceOptions = {
        title: "Binance Coin Price (USD)",
        curveType: "function",
        legend: { position: "bottom" },
    };

    return (
        <div id="analysis">
            <h3>Cryptocurrency Analysis <i class="fa-solid fa-chart-line"></i></h3>
            <p>Bitcoin remains the most influential cryptocurrency in the market, so when goes up or down, 
            the rest of the market tends to follow its lead.
            Ethereum and Binance remain highly influential on the market too.</p>

            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={bitcoinData}
                options={bitcoinOptions}
            />

            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={ethereumData}
                options={ethereumOptions}
            />


            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={binanceData}
                options={binanceOptions}
            />

        </div>
    )

};

export default Analysis;