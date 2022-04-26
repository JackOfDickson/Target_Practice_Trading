// import { Chart } from "react-google-charts"

// const PortfolioCharts = ({portfolio, cash}) => {


    
//     // const totalInvested= portfolio.reduce((previous, current) => previous + current.investment, 0 );
//     // const totalEquity = totalInvested + cash;

//     const pieChartData = [["Coin", "Cash invest"], ["Cash USD", cash]];
//     const data = []
    
//     portfolio.map(investment => {
//         const currentInvestment = [investment.coin.name, investment.investment];
//         data.push(currentInvestment);       
//     })
    
//     let matchedItems = [];
//     let unmatchedItems =[];

//     for (var i=0 ; i<data.length ; ++i) {
//         for(var j=0 ; j<pieChartData.length ; ++j) {
//             if(data[i][0] == pieChartData[j][0]) {    // If element is in both the arrays
//                 matchedItems.push(data[i]); 
//             } else {
//                 unmatchedItems.push(data[i])
//             }
//         }
//     }
    
//     matchedItems.forEach (matchedElement => {
//         pieChartData.forEach(chartElement => {
//             if (matchedElement[0] === chartElement[0]) {
//                 chartElement.investment += matchedElement.investment
//             }
//         })
//     })




//     pieChartData.push(unmatchedItems)
    


//     return (
//         <>
//             <p>Chart</p>

            
//             <Chart
//                 chartType="PieChart"
//                 data={pieChartData}
//                 // options = "my investment"
//                 width="100%"
//                 height="400px"
//                 legendToggle
// />
//         </>
//     )
// };
// export default PortfolioCharts