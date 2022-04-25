import { Chart } from "react-google-charts"

const PortfolioCharts = ({portfolio, cash}) => {


    
    // const totalInvested= portfolio.reduce((previous, current) => previous + current.investment, 0 );

    // const totalEquity = totalInvested + cash;

    const pieChartData = [["Coin", "Cash invest"], ["Cash USD", cash]];

    portfolio.map(investment => {
        const currentInvestment = [investment.coin.name, investment.investment]
        pieChartData.push(currentInvestment)
    })


    return (
        <>
            <p>Chart</p>

            
            <Chart
                chartType="PieChart"
                data={pieChartData}
                // options = "my investment"
                width="100%"
                height="400px"
                legendToggle
/>
        </>
    )
};
export default PortfolioCharts