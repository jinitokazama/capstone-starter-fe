import React, { Component } from "react";
import { generateAuthHeader } from "../../utils/authHelper";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";

import Alert from 'react-bootstrap/Alert';

import Header from "../../components/header/Header";
import RecipeForm from "../../pages/recipe/RecipeForm";

class AddRecipe extends Component {

    state = {
        errorMessage: null,
        successMessage: null,
        formData: {
            Description: "",
            Tags: "",
            Title: "",
            Source: "",
            Ingredients: "",
            Directions: "",
        }
    }

    handleChange = (event) => {
        this.setState({ errorMessage: "" });
        this.setState({ successMessage: "" });

        let formData = { ...this.state.formData };
        formData[event.target.id] = event.target.value;
        //set the expert to be the login user's email
        let auth = localStorage.getItem("auth");
        auth = JSON.parse(auth);
        formData.experts = auth.email;

        this.setState({ formData });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.formData.Ingredients === "") {
            this.setState({ errorMessage: "There are no ingredients listed!" })
            return;
        }

        const apiURL = process.env.REACT_APP_API_URL

        fetch(`${apiURL}/api/recipes`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                ...generateAuthHeader()
            },
            body: JSON.stringify(this.state.formData)
        })
            .then((response) => {
                if (!response.ok) {
                    this.setState({ errorMessage: `${response.status} - ${response.statusText}` });
                    return;
                }
                else {
                    response.json();// on success, turn the respons into JSON so we can work with it
                    this.setState({ successMessage: "Recipe has been successfully added" });
                }
            })

            //.then((data) => {

            //const message = "This recipe has been succesfully added into the library! Thank you for your contribution!"
            //programatically redirect to another route on success
            // this.props.history.push(`/recipes?message=${message}`)
            //})
            .catch(e => {
                this.setState({ errorMessage: e.errorMessage })
            })


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
                <RecipeForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                />

            </div>
        )
    }
}

export default mustBeAuthenticated(AddRecipe)