import react from "react"
import StocksBox from "./containers/StocksBox";
import Intro from "./designComponents/intro";
import Header from "./designComponents/header";
import Footer from "./designComponents/footer"

function App() {
  return (
  
	<>
	<Header />
    <div id="main">
      <Intro/>
      <StocksBox/>
    </div>
	<Footer />

	
    </>
  );
}

export default App;
