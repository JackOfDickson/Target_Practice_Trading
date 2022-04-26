import './css/UserStats.css';
import { Chart } from "react-google-charts";


const UserStats = ({activeUser, investmentValue}) => {

    const formatbalance = parseFloat(activeUser.cash).toFixed(2); // format to two decimal places
    const activeBalance = parseFloat(formatbalance).toLocaleString("en-US"); // Separate large numbers with commas

    const numberOfInvestments = (activeUser.portfolio).length; // Number of purchases

    // Map crypto portfolio
    const cryptosPurchased = activeUser.portfolio.map ((crypto) => { 

        const formatPurchasePrice = parseFloat(crypto.coin.priceUsd).toFixed(2); // format purchase price to two decimal places
        const purchasePrice = parseFloat(formatPurchasePrice).toLocaleString("en-US"); // Separate large numbers with commas

        return (
        <>
        <br />• {crypto.coin.name} ({crypto.coin.symbol}) - ${crypto.investment}
        <br /><em>Bought at ${purchasePrice}</em>
        </>
        )
    });

    // Create investment array showing coin name and coin price

    let investmentArray=[];
    if (investmentValue) { // check to see if investments exist
        investmentValue.map( crypto => {
            const coinInfo={
                name: crypto.coin, // name of crypto
                price: crypto.sell_price // sell price of crypto
            };
            investmentArray.push(coinInfo);
        });
    } // end if


// Function to combine current value of crypto purchases
for (let i = 0; i < investmentArray.length; ++i) { // Run through each item in investmentArray
   
    for (let unique = 0; unique < investmentArray.length; unique++) { // Second for loop to find unique keys
        
        // if cryptocurrency is found when looping round the second time
        if (i !== unique && investmentArray[i].name === investmentArray[unique].name) { 
            investmentArray[i].price+=investmentArray[unique].price; // Add value to first listing of cryptocurrency
            investmentArray.splice(unique, 1); // Remove duplicate entry from investmentArray
            unique--; // decrement index of second for loop
        } // end if
    } // end of second for loop
} // end of first for loop


// map investment portfolio for calculating value of crypto portfolio
    let investmentPortfolio;
    let investmentCalculation = 0;

   if (investmentValue) { // check to see investments exist

    investmentPortfolio = investmentArray.map( crypto => {

        investmentCalculation+=crypto.price;

       const formatSellPrice = parseFloat(crypto.price).toFixed(2); // format sell price to two decimal places
       const sellPrice = parseFloat(formatSellPrice).toLocaleString("en-US"); // Separate large numbers with commas


        return (
            <>
                <br />• {crypto.name} investment is now worth ${sellPrice}
            </>
            )        
    });

    }  
// End of mapping investment portfolio


   // Calculation and formatting for cash and crypto balances
   const formatInvestmentTotalValue = parseFloat(investmentCalculation).toFixed(2); // format sell price to two decimal places
   const investmentTotalValue = parseFloat(formatInvestmentTotalValue).toLocaleString("en-US"); // Separate large numbers with commas

   const workingBalance = parseFloat(activeUser.cash) + parseFloat(investmentCalculation); // Calculate total value of portfolio
   const formatWorkingBalance = parseFloat(workingBalance).toFixed(2); // format sell price to two decimal places
   const equityBalance = parseFloat(formatWorkingBalance).toLocaleString("en-US"); // Separate large numbers with commas


        
    // Data for User stats chart

    let data = [["Crypto", "USD Value"]];

    investmentArray.map( crypto => {
        const coinInfo=[crypto.name, parseFloat(crypto.price)];
        data.push(coinInfo);
    });


    const options = {
        title: "Value of Invested Cryptos in USD",
        width: 900,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
        };

    // End of chart data building section

    return (

        <section id="user-stats" class="three">
        <div className="container">

            <header>
                <h2>User Stats <i class="fa-solid fa-chart-column"></i></h2>
            </header>

            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />

            <div id="user-stats-box">
                <div className="left">
                    <p>Initial Investment: $10,000</p>
                    <p>Number of Investments: {numberOfInvestments}</p>
                    <p>Cryptos Purchased: {cryptosPurchased}</p>
                </div>
                <div className="right">
                <p>Equity Balance: ${equityBalance}
                <br /><em>Cash Balance: ${activeBalance}</em>
                <br /><em>Crypto Balance: ${investmentTotalValue}</em>
                </p>
                <p>Crypto Value: {investmentPortfolio}</p>

                </div>
            </div>

        </div>
    </section>


    )
}
export default UserStats;