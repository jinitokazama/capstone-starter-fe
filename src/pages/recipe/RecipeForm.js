import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function RecipeForm({ handleChange, handleSubmit, formData }) {
    return (
        <div className="RecipeForm container" bg="primary">

            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col>
                        <Form.Group controlId="description">
                            <Form.Label style={{ color: 'white' }}><strong>Description:</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.description} type="text" placeholder="Brief description of the recipe" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label style={{ color: 'white' }}><strong>Tag:</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.tag} type="text" placeholder="Tag" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label style={{ color: 'white' }}><strong>Title:</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.title} type="text" placeholder="Recipe Title" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="source">
                            <Form.Label style={{ color: 'white' }}><strong>Image Source:</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.source} type="text" placeholder="Recipe image" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="ingredients">
                            <Form.Label style={{ color: 'white' }}><strong>Ingredients:</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.ingredients} type="text" placeholder="Ingredients" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="directions">
                            <Form.Label style={{ color: 'white' }}><strong>Directions:</strong></Form.Label>
                            <Form.Control onChange={handleChange} value={formData.directions} type="text" placeholder="Ingredients" />
                        </Form.Group>
                    </Col>
                </Row>
                <br />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default RecipeForm;