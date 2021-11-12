import Carousel from 'react-bootstrap/Carousel';

function Slideshow(props) {

    return (
        <div className="Slideshow container mb-3">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img style={{'height':"640px"}}
                                            className="d-block w-100"
                        src="https://as1.ftcdn.net/v2/jpg/00/65/49/36/1000_F_65493692_8MV0xO2gzOPkAsy2OS4VXth1U1tLiGhh.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height':"640px"}}
                        className="d-block w-100"
                        src="http://via.placeholder.com/800x400"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height':"640px"}}
                        className="d-block w-100"
                        src="http://via.placeholder.com/800x400"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slideshow;
