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
            description: "",
            tags: "",
            title: "",
            source: "",
            ingredients: "",
            directions: "",
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
        //reset alert message
        this.setState({ errorMessage: null });
        this.setState({ successMessage: null });

        event.preventDefault();

        //validate form data

        if (this.state.formData.description === "") {
            this.setState({ errorMessage: "The description is empty!" })
            return;
        }
        if (this.state.formData.tags === "") {
            this.setState({ errorMessage: "The tags field is empty!" })
            return;
        }
        if (this.state.formData.title === "") {
            this.setState({ errorMessage: "The title is empty!" })
            return;
        }
        if (this.state.formData.source === "") {
            this.setState({ errorMessage: "The image source is empty!" })
            return;
        }
        if (this.state.formData.ingredients === "") {
            this.setState({ errorMessage: "The ingredients filed is empty!" })
            return;
        }
        if (this.state.formData.directions === "") {
            this.setState({ errorMessage: "The directions field is empty!" })
            return;
        }
        const apiURL = process.env.REACT_APP_API_URL

        //make API call to add data to the database

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
                    this.setState({ successMessage: "Recipe is added successfully" });
                    const message = "Recipe is added successfully"
                    //programatically redirect to another route on success
                    this.props.history.push(`/recipes?message=${message}`)
                }
            })

            .catch(e => {
                this.setState({ errorMessage: e.errorMessage })
            })


    }

    render() {
        return (
            <div className="Register">

                <Header isAuthenticated={this.props.isAuthenticated} />
                    <br/>
                    <br/>
                    <h3 className="text-center" >Add a Recipe</h3>
               
               
                    <RecipeForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                />
                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                    {this.state.successMessage && <Alert variant="success">{this.state.successMessage}</Alert>}
                </div>
            </div>
        )
    }
}

export default mustBeAuthenticated(AddRecipe)