import isAuthenticated from "../../utils/isAuthenticated";
import Header from "../../components/header/Header";
import Footer from "../../components/footers/Footer";
import Slideshow from "../../components/slideshow/Slideshow";
import HomeGridCards from "../../components/gridcards/HomeGridCards";

function Home(props) {
  return (
    <div className="Home">
        <Header isAuthenticated={isAuthenticated()}/>
        <Slideshow/>
        <HomeGridCards/>
        <Footer/>
    </div>
  );
}

export default Home;
