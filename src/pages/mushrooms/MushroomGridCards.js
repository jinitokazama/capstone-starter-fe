import React from 'react';
import MushroomDataService from '../../service/MushroomDataService';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class MushroomGridCards extends React.Component {
    state = {
        mushroomData: []
    };

    mushroomService = new MushroomDataService()

    componentDidMount() {
        this.getMushrooms()
    }

    getMushrooms = () => {
        this.mushroomService.getAllMushrooms().then((response) => {
            this.setState({ mushroomData: response.data })
        })
            .catch((error) => {
                console.log("Error No Mush" )
            })
    }

    render() {
        return (
            <div className="GridCards container mb-3">
                <Row xs={1} lg={3} className="g-4">
                    {this.state.mushroomData.map((mushroom, idx) => (
                        <Col key={ idx }>
                            <Card>
                                <Card.Img variant="top" src={ mushroom.pictureURL }/>
                                <Card.Body>
                                    <Card.Title>{ mushroom.commonName[0] }</Card.Title>
                                    <Card.Text>{ mushroom.description }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default MushroomGridCards;
