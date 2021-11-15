import Header from "../../components/header/Header";
import ToolGridCards from "../../components/gridcards/ToolGridCards";
import ToolSlideshow from "../../components/slideshow/ToolsSlideshow";

function Tools(props) {
  return (
    <div className="Tools" class="Tools">
        <Header/>
        <ToolSlideshow />
        <ToolGridCards/>
    </div>
  );
}

export default Tools;
