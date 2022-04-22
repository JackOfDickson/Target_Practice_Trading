

const PortfolioItem = ({coin, index, sellCrypto}) => {

    const handleSellClick = ()=>
    {
        sellCrypto(coin, index);
    }


    const priceTo4Decimals = parseFloat(coin.priceUsd).toFixed(4)

    return (
    <>
        <p>{coin.id}  value: {priceTo4Decimals}</p>
        <button onClick={handleSellClick}>sell coin</button>
    </>
    )
}
export default PortfolioItem