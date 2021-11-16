import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function MushroomForm({ handleChange, handleSubmit, formData }) {
    return (
        <div className="MushroomForm container">

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="commonName">
                            <Form.Label><strong>Common Name:</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.commonName} type="text" placeholder="common name of the mushroom, can have multiple ones.  Separte them with a common" />
                        </Form.Group>
                    </Col>
                    <Form.Group controlId="scientificName">
                        <Form.Label><strong>Scientific Name</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.scientificName} type="text" placeholder="unique name" />
                    </Form.Group>
                    <Col>
                        <Form.Group controlId="color">
                            <Form.Label><strong>Color</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.color} type="text" placeholder="color" />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="description">
                            <Form.Label><strong>Description</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.description} type="text" placeholder="General information about this mushroom" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="idCharacteristics">
                            <Form.Label><strong>Identifiction Characteristics</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.idCharacteristics} type="text" placeholder="describe the body, cap, gills, stem, flesh and ring" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="edibility">
                            <Form.Label><strong>Edibility</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.edibility} type="text" placeholder="edible" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="locations">
                            <Form.Label><strong>Location</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.locations} type="text" placeholder="US region, or continent" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="habitat">
                            <Form.Label><strong>Habitat</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.habitat} type="text" placeholder="environment the mushroom grows: tree, soil etc" />
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="experts">
                            <Form.Label><strong>Experts</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.experts} type="text" placeholder="first name and last name"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="pictureUrl">
                            <Form.Label><strong>Pictural URL</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.pictureUrl} type="text" placeholder="URL where sample mushroom picture can be viewed" />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default MushroomForm;