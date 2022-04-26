import react from "react";

const Header = ({handleLogOut}) => {

    const handleClick = ()=>
    {
        handleLogOut();
    }

    return  (
        <>
        {/* Header */}
        <div id="header">

            <div className="top">

                {/* Logo */}
                    <div id="logo">
                        <img src={require('../images/TARGET-PRACTICE.png')} alt="" width="200"/>
                        <h1 id="title"></h1>
                        <p></p>
                    </div>
                {/* End of Logo */}

                {/*  Nav */}
                    <nav id="nav">
                        <ul>
                            <li><a href="#top" id="top-link"><span className="icon solid fa-home">Intro</span></a></li>
                            <li><a href="#how-to-play" id="play-link"><span className="icon solid fa-gamepad">How to Play</span></a></li>
                            <li><a href="#user-stats" id="stats-link"><span className="icon solid fa-user">User Stats</span></a></li>
                            <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
                            <li><a href="#market" id="market-link"><span className="icon brands fa-bitcoin">Market</span></a></li>

                            <li><a href="#mystery-coin" id="mystery-coin-link"><span class="icon solid fa-circle-question">Mystery Coin</span></a></li>

                            <li><button  onClick={handleClick}>Logout</button></li>
                        </ul>
                    </nav>
                {/*  End of Nav */}

            </div>
            {/*  End of Top*/}

            <div className="bottom">

                {/*  Social Icons */}
                    <ul className="icons">
                        <li><a href="https://github.com/stephaniepboyne" className="icon solid fa-face-grin-stars"><span className="label">Stephanie</span></a></li>
                        <li><a href="https://github.com/JackOfDickson" className="icon solid fa-face-grin-tongue-squint"><span className="label">Jack</span></a></li>
                        <li><a href="https://github.com/Matt-Matthaiou" className="icon solid fa-face-laugh-wink"><span className="label">Matt</span></a></li>
                        <li><a href="https://github.com/kevinmuldoon-github" className="icon solid fa-face-grin-tongue-wink"><span className="label">Kevin</span></a></li>
    </ul>

            </div>

        </div> 		
  
  {/* End of Header */}
  </>
    )
}

export default Header; 
