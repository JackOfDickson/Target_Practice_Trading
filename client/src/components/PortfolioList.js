import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioList = ({portfolio, sellCrypto})=>
{
    const portfolioNodes = portfolio.map((coin, index) => {
        return (
        <PortfolioItem coin={coin} index={index} key={index} sellCrypto={sellCrypto}/>
        )}
    )

    return (
        <>
        {portfolioNodes}
        </>
    )
}

export default PortfolioList