import isAuthenticated from "../../utils/isAuthenticated";
import Header from "../../components/header/Header";
import ToolGridCards from "../../components/gridcards/ToolGridCards";
import ToolSlideshow from "../../components/slideshow/ToolsSlideshow";
// import Footer from '../../components/footers/Footer';

function Tools(props) {
  return (
    <div className="Tools">
        <Header isAuthenticated={isAuthenticated()}/>
        <ToolSlideshow />
        <ToolGridCards/>
        {/* <Footer /> */}
    </div>
  );
}

export default Tools;
