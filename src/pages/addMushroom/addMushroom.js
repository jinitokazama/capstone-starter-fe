import React, { Component } from "react";
import { generateAuthHeader } from "../../utils/authHelper";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Alert from 'react-bootstrap/Alert';
import Header from "../../components/header/Header";
import MushroomForm from "../../components/mushroomForm/MushroomForm";

class AddMushroom extends Component {

    state = {
        errorMessage: null,
        success: false,
        formData: {
            commonName: "",
            scientificName: "",
            description: "",
            color: "",
            idCharacteristics: "",
            edibility: "",
            locations: "",
            experts: "",
            pictureUrl: "",
            wikipediaUrl: ""
        }
    }

    handleChange = (event) => {
        let formData = { ...this.state.formData };

        formData[event.target.id] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.formData.pictureUrl === "") {
            this.setState({ errorMessage: "The pictureUrl is empty!" })
            return;
        }

        const apiURL = process.env.REACT_APP_API_URL

        fetch(`${apiURL}/api/mushrooms`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                ...generateAuthHeader()
            },
            body: JSON.stringify(this.state.formData)
        })
            .then((response) => response.json())
            .then((data) => {
                const message = "This mushroom has been succesfully added into the library! Thank you for your contribution!"
                this.props.history.push(`/mushrooms?message=${message}`)
            })
            .catch(e => console.log(e.message))
    }

    render() {
        return (
            <div className="Register">
                <Header isAuthenticated={this.props.isAuthenticated} />
                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                    {this.state.successMessage && <Alert variant="info">{this.state.successMessage}</Alert>}
                </div>
                <h3 className="text-center" >Add a Mushroom</h3>
                <MushroomForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                />

            </div>
        )
    }
}

export default mustBeAuthenticated(AddMushroom)