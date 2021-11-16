import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import HomeGridCards from "../../components/gridcards/HomeGridCards";

function Home(props) {
  return (
    <div className="Home">
        <Header/>
        <Slideshow/>
        <HomeGridCards/>
    </div>
  );
}

export default Home;
