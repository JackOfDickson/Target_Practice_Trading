import { Chart } from "react-google-charts"


const PortfolioCharts = ({portfolio, cash}) => {


    const pieChart = [["Coin", "Cash invest"], ["Cash USD", cash]];

    portfolio.map(investment => {
        const currentInvestment = [investment.coin.name, investment.investment]
        pieChart.push(currentInvestment)
    })

  

     
   
    
    return (
        <>
           <div class="chart"><Chart
                chartType="PieChart"
                data={pieChart}
                // options = "my investment"
                width="100%"
                height="400px"
                options={{
                    backgroundColor: {
                        fill: 'none'}}}
                    
                legendToggle
                
                
                
/></div>
        </>
    )
};
export default PortfolioCharts