import { useState, useEffect} from 'react';

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
            .then (result => setAnalysis (result.data));
    };

    // Format API data
    let dataMap;
    analysis.map( crypto => {

        let dateTemp = crypto.date;
        // const coinInfo=[crypto.priceUsd, crypto.sell_price];
        // data.push(coinInfo);
        // setAnalysis
    });


    return (

        <>



        </>
    )

};

export default Analysis;