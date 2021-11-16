import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import ToolService from "../../service/ToolsService";

const ToolSlideshow = () => {
  const [tools, setTools] = useState([{}]);

  useEffect(() => {
    const toolService = new ToolService();

    toolService
      .getAllTools()
      .then((toolList) => {
        setTools(toolList.data);
      })
      .catch((error) => {
        this.setState({ errorMessage: "Cant get Tools" });
      });
  }, []);

  return (
    <div className="Slideshow container mb-3">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            style={{ height: "640px" }}
            className="d-block w-100"
            src={tools[0]?.pictureUrl}
            alt="slide"
         
          />
          <Carousel.Caption>
            <h5 className="text-primary">{tools[0]?.name}</h5>
            <p className="text-primary">{tools[0]?.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "640px" }}
            className="d-block w-100"
            src={tools[1]?.pictureUrl}
            alt="slide"
            
          />
          <Carousel.Caption>
            <h5 className="text-primary">{tools[1]?.name}</h5>
            <p className="text-primary">{tools[1]?.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "640px" }}
            className="d-block w-100"
            src={tools[2]?.pictureUrl}
            alt="slide"
          
          />
          <Carousel.Caption>
            <h5 className="text-primary">{tools[2]?.name}</h5>
            <p className="text-primary">{tools[2]?.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ToolSlideshow;
