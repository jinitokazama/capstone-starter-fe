import isAuthenticated from "../../utils/isAuthenticated";
import Header from "../../components/header/Header";
import ToolGridCards from "../../components/gridcards/ToolGridCards";
import ToolSlideshow from "../../components/slideshow/ToolsSlideshow";
import Footer from '../../components/footer/footer';

function Tools(props) {
  return (
    <div className="Tools">
        <Header isAuthenticated={isAuthenticated()}/>
        <ToolSlideshow />
        <ToolGridCards/>
        <Footer />
    </div>
  );
}

export default Tools;
