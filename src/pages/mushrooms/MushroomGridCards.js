import React from 'react';
import MushroomDataService from '../../service/MushroomDataService';
import isAuthenticated from '../../utils/isAuthenticated';
import { Link } from 'react-router-dom';
import "../mushrooms/Mushroom.css";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class MushroomGridCards extends React.Component {
    state = {
        mushroomData: [],
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
                console.log("Error: Could not find mushrooms")
            })
    }

    deleteMushrooms = (mushroomId) => {
        this.mushroomService.deleteMushrooms(mushroomId).then((response) => {
            this.getMushrooms()
        })
        console.log("delete: " + mushroomId)
    }

    handleSearch = (event) => {
        this.mushroomService.getAllMushrooms(event.target.value).then((response) => {
            this.setState({ mushroomData: response.data })
        })
            .catch((error) => {
                console.log("Error: Could not find mushrooms")
            })
    }

    render() {
        return (
            <div className="GridCards px-5 mb-3">
                <Row padding='20'>
                        Mushroom Search<input type="text" onChange={this.handleSearch}/>
                </Row>
                <Row xs={1} lg={3} className="g-4">
                    {this.state.mushroomData.map((mushroom, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={mushroom.pictureUrl} />
                                <Card.Body>
                                    <Card.Title>{mushroom.commonName[0]}</Card.Title>
                                    <Card.Link href={mushroom.wikipediaUrl}>Scientific Name: {mushroom.scientificName}</Card.Link>
                                    <Card.Text>Description: {mushroom.description}</Card.Text>
                                    <Card.Text>Color: {mushroom.color}</Card.Text>
                                    <Card.Text>Edible: {mushroom.edibility}</Card.Text>
                                    <Card.Text>Location: {mushroom.locations}</Card.Text>
                                    {isAuthenticated() ? <Button className="MushroomButton" onClick={() => this.deleteMushrooms(mushroom._id)}>Delete</Button> : null}
                                    {isAuthenticated() ? <Button className="MushroomButton" as={Link} to={`/editMushroom/${mushroom._id}`}>Update</Button> : null}
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
