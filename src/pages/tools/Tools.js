import Header from "../../components/header/Header";
import ToolGridCards from "../../components/gridcards/ToolGridCards";
import ToolSlideshow from "../../components/slideshow/ToolsSlideshow";

function Tools(props) {
  return (
    <div className="Home">
        <Header/>
        <ToolSlideshow />
        <ToolGridCards/>
    </div>
  );
}

export default Tools;
