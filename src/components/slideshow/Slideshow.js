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
                        fluid
                    />
                    <Carousel.Caption>
                        <h5>Morchella</h5>
                        <p>Morel, highly prized mushroom by gourmet cooks.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height':"640px"}}
                        className="d-block w-100"
                        src="https://as2.ftcdn.net/v2/jpg/02/44/40/91/1000_F_244409173_EmpmA69Po0HjCtly5ZvKlvRjDjQQDIlH.jpg"
                        alt="Second slide"
                        fluid
                    />
                    <Carousel.Caption>
                        <h5>Amanita Muscaria</h5>
                        <p>Fly Agaric, most recognizable in popular culture (Mario), classified as poisonous.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height':"640px"}}
                        className="d-block w-100"
                        src="https://as1.ftcdn.net/v2/jpg/02/24/07/90/1000_F_224079089_2qso9biExA0Ynu3Z3KSfp0auHuwjPr9H.jpg"
                        alt="Third slide"
                        fluid
                    />
                    <Carousel.Caption>
                        <h5>Laetiporus</h5>
                        <p>Chicken of the Woods, easy to be identified by its sulphur-yellow to orange body.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height':"680px"}}
                        className="d-block w-100"
                        src="https://as2.ftcdn.net/v2/jpg/04/67/58/25/1000_F_467582582_QiXmPSyj0Wqg28s1lqWZO8rBX2gGqnre.jpg"
                        alt="Fourth slide"
                        fluid
                    />
                    <Carousel.Caption>
                        <h5>Auricularia Auricula-Judae</h5>
                        <p>"Wood Ear", edible forrest mushroom, a popular ingredient in Chinese hot and sour soup.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height':"680px"}}
                        className="d-block w-100"
                        src="https://as1.ftcdn.net/v2/jpg/03/54/50/60/1000_F_354506042_PotCXlzJV6ZZrfY0qFCpiyrjeKUGVUHl.jpg"
                        alt="Fifth slide"
                        fluid
                    />
                    <Carousel.Caption>
                        <h5>Coprinellus disseminatus</h5>
                        <p>Fairy Inkcap, forms dense masses swarming over rotting tree stumps and roots, reported to be edible but not highly regarded.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slideshow;
