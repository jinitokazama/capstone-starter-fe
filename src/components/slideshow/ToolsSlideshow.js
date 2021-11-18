import Carousel from "react-bootstrap/Carousel";

const ToolSlideshow = () => {

  return (
    <div className="Slideshow container mb-3">
      <Carousel variant="dark">
        <Carousel.Item>
        <Carousel.Caption>
            <h5 className="text-danger">Elephant Tool</h5>
            <p className="text-danger">Does things a Elephant does</p>
          </Carousel.Caption>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={"https://as1.ftcdn.net/v2/jpg/04/68/36/64/1000_F_468366497_GQbtmMWdCkYXDwMDiAiivquwTuaXo4Gq.jpg"}
            alt="slide"
         
          />
        
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption>
            <h5 className="text-danger">Racoon Tool</h5>
            <p className="text-danger">Does Things a racoon does</p>
          </Carousel.Caption>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={"https://as1.ftcdn.net/v2/jpg/03/70/62/24/1000_F_370622493_6GjsGXVmSXNNUGm0WjxKTmiutZOilw4i.jpg"}
            alt="slide"
            
          />
          
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption>
            <h5 className="text-danger">Hamster Tool</h5>
            <p className="text-danger">Does things a hamster does</p>
          </Carousel.Caption>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={"https://as1.ftcdn.net/v2/jpg/03/70/62/24/1000_F_370622405_RtRqVoCIQBTcLImVYmgDhnfROYlpn6x4.jpg"}
            alt="slide"
          
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ToolSlideshow;
