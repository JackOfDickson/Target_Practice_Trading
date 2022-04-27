import React from "react";
import './css/MoversShakers.css';
import { Chart } from "react-google-charts";
import { CurrencyFormatter } from './CurrencyFormatter';

const MoversShakers = ({cryptos}) => {


    // function to sort cryptos by the best performing cryptos over the last 24 hours
    const cryptosCopy= cryptos.map((x) => x); // Create duplicate list in order to sort cryptos by worst performance
    const bestCryptos = cryptosCopy.sort(function(a, b) {
        return b.changePercent24Hr-a.changePercent24Hr;
    });

    // function to sort cryptos by the worst performing cryptos over the last 24 hours
    const cryptosCopy2= cryptos.map((x) => x); // Create duplicate list in order to sort cryptos by worst performance
    const worstCryptos = cryptosCopy2.sort(function(a, b) {
        return a.changePercent24Hr-b.changePercent24Hr;
    });

    // Find the top five cryptos over the last 24 hours
    const bestCryptosList = bestCryptos.slice(0, 5).map(coin=>{ 
        const diff = CurrencyFormatter(coin.changePercent24Hr); // Only show two decimal places in percentage


        const coinPrice = CurrencyFormatter(coin.priceUsd); // Separate large numbers with commas

            return (
                <div className="bestCryptoDetails">
                    <p>{coin.name}  ({coin.symbol}) &nbsp;{coinPrice}  <span className="bestPercentage">{diff}%</span></p>
                </div>
            )
        })

     // Find the worst five cryptos over the last 24 hours
    const worstCryptosList = worstCryptos.slice(0, 5).map(coin=>{ 
        const diff = CurrencyFormatter(coin.changePercent24Hr); // Only show two decimal places in percentage

        const coinPrice = CurrencyFormatter(coin.priceUsd); // Format coin price


            return (
                <div className="worstCryptoDetails">
                    <p>{coin.name} ({coin.symbol}) &nbsp;{coinPrice} <span className="worstPercentage">{diff}%</span></p>
                </div>
            )
        })

    // Build Chart Data

    let data = [["Cryptocurrency", "% Change in 24 Hours"]];

        cryptos.map( crypto => {
            const coinInfo=[crypto.name, parseFloat(crypto.changePercent24Hr)];
            data.push(coinInfo);
        });

    return (
        <div id="movers-shakers">
            <h3>Movers & Shakers <i class="fa-solid fa-thumbs-up"></i> <i class="fa-solid fa-thumbs-down"></i></h3>
            <p>Check out the biggest shifts in the market over the last 24 hours.</p>
           
            <div id="movers-shakers-box">
                <div className="best">{bestCryptosList}</div>
                <div className="worst">{worstCryptosList}</div>
            </div> 
            <div class="graph-container"><Chart chartType="ColumnChart" width="100%" height="400px" data={data}
                options={{
                    backgroundColor: {
                        fill: 'none'},
                    labelStyle: {
                        fill: 'white'},
                    colors: [ 'yellow'],
                    hAxis: {
                        textStyle: {
                            color: "white"
                     }},
                    vAxis: {
                        textStyle: {
                        color: 'white'
                        }},
                    legend: {
                        textStyle: {
                            color: 'white'
                        }
                    }
                    
                }}
            /></div>
            <br></br>
        </div>
    )
}
export default MoversShakers;