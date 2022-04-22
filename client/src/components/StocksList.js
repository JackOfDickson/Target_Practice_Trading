import Stock from "./Stock"

const StocksList = ({cryptos}) => {

    const cryptoList = cryptos.map(coin=>
        { return (
            <Stock coin={coin} key={coin.id}/>
        ) })

    return (
        <div>
            {cryptoList}
        </div>
    )
}
export default StocksList