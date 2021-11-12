import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link, withRouter } from 'react-router-dom';

function ToolGridCards(props) {

    const tools = [{}]

    return (
        <div className="GridCards container mb-3">
            <Row xs={1} lg={3} className="g-4">
                <Col>
                    <Card border="success" >

                        <Card.Body>
                            <Link to="/login" href="/login">
                                <Card.Title>Shroomify</Card.Title>
                            </Link>
                            <Card.Text>
                                View common mushrooms with images to help you ID your mushroom.
                            </Card.Text>
                        </Card.Body>
                        <Link to="/login" href="/login">
                            <Card.Img variant="bottom" src="../../pictures/1" />
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card border="success" >
                        <Link to="/login" href="/login">
                            <Card.Img variant="top" src="../../pictures/1.jpg" />
                        </Link>
                        <Card.Body>
                            <Link to="/login" href="/login">
                                <Card.Title>Best Mushroom Recipes</Card.Title>
                            </Link>
                            <Card.Text>
                                24 mushroom recipes so good, they're magic!
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card border="success" >

                        <Card.Body>
                            <Link to="/login" href="/login">
                                <Card.Title>Shroom Hunting Tools</Card.Title>
                            </Link>
                            <Card.Text>
                                Here's what you will need to start foraging mushrooms.
                            </Card.Text>
                        </Card.Body>
                        <Link to="/login" href="/login">
                            <Card.Img variant="bottom" src="https://as2.ftcdn.net/v2/jpg/02/86/59/47/1000_F_286594712_YXAKXa7lCWsWjtrrO11r4YCy1iAOiRS7.jpg" />
                        </Link>
                    </Card>
                </Col>

            </Row>
        </div>
    );
}

export default withRouter(ToolGridCards);
