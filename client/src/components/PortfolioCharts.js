import { Charts } from "react-google-charts"

const PortfolioCharts = ({portfolio}) => {



    // const investmentAmountArray = portfolio.map(coin_investments => coin_investments.investment)
    // const totalAmount = investmentAmountArray.reduce((previous, current) => previous + current, 0)
    
    const totalInvested= portfolio.reduce((previous, current) => previous + current.investment, 0 )
    
    // const totalAmount = investmentAmountArray.reduce()

    return (
        <>
            <p>Chart</p>
            {/* <Chart
  chartType="ScatterChart"
  data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
  width="100%"
  height="400px"
  legendToggle
/> */}
        </>
    )
};
export default PortfolioCharts