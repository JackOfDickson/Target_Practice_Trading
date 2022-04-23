import react from "react";

const Header = () => {

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
                            <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
                            <li><a href="#about" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
                            <li><a href="#market" id="market-link"><span className="icon brands fa-bitcoin">Market</span></a></li>
                        </ul>
                    </nav>
                {/*  End of Nav */}

            </div>
            {/*  End of Top*/}

            <div className="bottom">

                {/*  Social Icons */}
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                    </ul>

            </div>

        </div> 		
  
  {/* End of Header */}
  </>
    )
}

export default Header; 