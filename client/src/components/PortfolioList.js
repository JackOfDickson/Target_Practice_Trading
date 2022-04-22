import React from "react";
import PortfolioItem from "./PorfolioItem";

const PortfolioList = ({userPortfolio, sellCrypto})=>
{
    const portfolioNodes = userPortfolio.map((coin, index) => {
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