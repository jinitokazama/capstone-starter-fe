import isAuthenticated from "../../utils/isAuthenticated";
import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import GridCards from "../../components/gridcards/GridCards";

function Home(props) {
  return (
    <div className="Home">
        <Header isAuthenticated={isAuthenticated()}/>
        <Slideshow/>
        <GridCards/>
    </div>
  );
}

export default Home;
