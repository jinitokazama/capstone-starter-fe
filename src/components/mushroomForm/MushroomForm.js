import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MushroomForm({handleChange, handleSubmit, formData}) {
    return (
            <div className="MushroomForm container">

                <h3 className="text-center" >Add A Mushroom to Our Library</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="commonName">
                        <Form.Label><strong>Common Name:</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.email} type="text" placeholder="common name of the mushroom, can have multiple ones.  Separte them with a common" />
                    </Form.Group>

                    <Form.Group controlId="scientificName">
                        <Form.Label><strong>Scientific Name</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="unique name" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label><strong>Description</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="color">
                        <Form.Label><strong>Color</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="color" />
                    </Form.Group>

                    <Form.Group controlId="idCharacteristics">
                        <Form.Label><strong>Identifiction Characteristics</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="describe the body, cap, gills, stem, flesh and ring" />
                    </Form.Group>

                    <Form.Group controlId="edibility">
                        <Form.Label><strong>Edibility</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="edible" />
                    </Form.Group>

                    <Form.Group controlId="toxicity">
                        <Form.Label><strong>Toxicity</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="toxicity" />
                    </Form.Group>

                    <Form.Group controlId="habitat">
                        <Form.Label><strong>Habitat</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="environment the mushroom grows: tree, soil etc" />
                    </Form.Group>

                    <Form.Group controlId="locations">
                        <Form.Label><strong>Location</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="US region, or continent" />
                    </Form.Group>

                    <Form.Group controlId="pictureUrl">
                        <Form.Label><strong>Pictural URL</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="URL where sample mushroom picture can be viewed" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
}

export default MushroomForm;
