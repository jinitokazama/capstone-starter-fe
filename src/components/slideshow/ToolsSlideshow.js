import Carousel from "react-bootstrap/Carousel";

const ToolSlideshow = () => {

  return (
    <div className="Slideshow container mb-3">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={"https://as1.ftcdn.net/v2/jpg/00/00/43/68/1000_F_436857_Vm9o6Gq0oTlZsoTYDA6734EgymR1XT.jpg"}
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
            src={"https://as1.ftcdn.net/v2/jpg/04/61/71/92/1000_F_461719263_Mb4ExRMo1mv8TbRritVWG2biNFYkXXVf.jpg"}
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
            src={"https://as2.ftcdn.net/v2/jpg/02/83/40/25/1000_F_283402549_3DRw9qM2gTUMWKSAUqNzotm1GXfa8Xk1.jpg"}
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
