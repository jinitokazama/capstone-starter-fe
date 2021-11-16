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
            toxicity: "",
            habitat: "",
            locations: "",
            experts: "",
            pictureUrl: ""
        }
    }

    //method that handles updating the data in state that matches the data in the form
    //runs everytime a form field changes
    handleChange = (event) => {
       
        let formData = { ...this.state.formData };
       
        formData[event.target.id] = event.target.value;
        
        this.setState({ formData });
    }

    //run when the form is submitted
    handleSubmit = (event) => {

        //prevent the form from refreshing the page
        event.preventDefault();

        if (this.state.formData.pictureUrl === "") {
            this.setState({ errorMessage: "The pictureUrl is empty!" })
            return;
        }

        //get API url from the environment variables
        const apiURL = process.env.REACT_APP_API_URL

        //use fetch to make a POST request with the Data from state that has been populated from
        //the data in the form
        fetch(`${apiURL}/api/mushrooms`, {
            method: "POST", //make sure whe set our method to POST when creating records
            headers: {
                'content-type': 'application/json', //make sure we set the content-type headers so the API knows it is recieveing JSON data
                ...generateAuthHeader()
            },
            body: JSON.stringify(this.state.formData) //send our data form state int he body of the request
        })
            .then((response) => response.json()) // on success, turn the respons into JSON so we can work with it
            .then((data) => {
                const message = "This mushroom has been succesfully added into the library! Thank you for your contribution!"
                //programatically redirect to another route on success
                this.props.history.push(`/mushrooms?message=${message}`)
            })
            .catch(e => console.log(e.message)) //console.log any errors if the previous steps fail

    }

    render() {
        return (
            <div className="Register">

                <Header isAuthenticated={this.props.isAuthenticated} />

                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                    {this.state.successMessage && <Alert variant="info">{this.state.successMessage}</Alert>}
                </div>
                <h3 className="text-center" >Add A Mushroom</h3>
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