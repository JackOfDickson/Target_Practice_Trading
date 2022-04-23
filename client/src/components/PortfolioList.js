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
        
        <section id="portfolio" class="three">
        <div class="container">
            <header>
                <h2>Portfolio</h2>
            </header>
        {portfolioNodes}
        </div>
        </section>
        
    )
}

export default PortfolioList