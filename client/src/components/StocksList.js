import Stock from "./Stock"

const StocksList = ({cryptos, addCrypto, cashWallet}) => {

    const cryptoList = cryptos.map(coin=>
        { 
            
            return (
                <Stock coin={coin} key={coin.id} addCrypto={addCrypto} cashWallet={cashWallet}/>
        )})

    return (
        <div>
            {cryptoList}
        </div>
    )
}
export default StocksList