import { useState, useEffect} from 'react';
import './css/Analysis.css';
import { Chart } from "react-google-charts";

const Analysis = () => {

    // Define useState array for bitcoin analysis
    const [analysis, setAnalysis] = useState([]);

    // Create useEffect for using API
    useEffect ( ()  => {
        getHistory();
    }, []);

    // Fetch price history of coin using API URL
    const getHistory = function () { 
        fetch ('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
            .then (response => response.json())
            .then (result => setAnalysis (result.data.reverse().slice(0,200))); 
            // Reverse function used as API places new data at end
            // Slice function used to limit array to a defined number of items
    };

    // Format API data
    let dataMap=[];
    analysis.map( crypto => {
        const initialDate = crypto.date.split("T") // Split date stamp at timeline
        const dateTemp = initialDate[0]; // Capture date part of date stamp
        const formattedDate = new Date(dateTemp);
        const priceTemp=parseFloat(crypto.priceUsd);
        const coinInfo = {
            date: formattedDate,
            price: priceTemp
        } ;
        dataMap.push(coinInfo);
 
    });

    // Build Chart Data

    let data = [["Year", "Price"]];

    dataMap.map( crypto => {
        const coinInfo=[crypto.date, crypto.price];
        data.push(coinInfo);
    });

    console.log(data)

    const options = {
        title: "Bitcoin Price in USD",
        curveType: "function",
        legend: { position: "bottom" },
    };


    return (
        <div id="analysis">
            <h3>Bitcoin Analysis <i class="fa-solid fa-chart-line"></i></h3>
            <p>Bitcoin remains the most influential cryptocurrency in the market.
            When it goes up or down, the rest of the market tends to follow its lead.</p>

            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />

        </div>
    )

};

export default Analysis;