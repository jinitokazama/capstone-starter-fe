import Carousel from "react-bootstrap/Carousel";
import picture1 from '../../pictures/1.jpg';
import picture4 from '../../pictures/4.jpg';
import picture6 from '../../pictures/6.jpg';

const ToolSlideshow = () => {

  return (
    <div className="Slideshow container mb-3">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={picture1}
            alt="slide"
         
          />
          <Carousel.Caption>
            <h5 className="text-warning">Elephant Tool</h5>
            <p className="text-warning">Does things a Elephant does</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={picture4}
            alt="slide"
            
          />
          <Carousel.Caption>
            <h5 className="text-warning">Racoon Tool</h5>
            <p className="text-warning">Does Things a racoon does</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={picture6}
            alt="slide"
          
          />
          <Carousel.Caption>
            <h5 className="text-warning">Hamster Tool</h5>
            <p className="text-warning">Does things a hamster does</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ToolSlideshow;
