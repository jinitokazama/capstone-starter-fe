import React, { Component } from "react";
import { generateAuthHeader } from "../../utils/authHelper";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Alert from 'react-bootstrap/Alert';
import Header from "../../components/header/Header";
import MushroomForm from "../../components/mushroomForm/MushroomForm";

class AddMushroom extends Component {

    state = {
        errorMessage: null,
        successMessage: null,
        formData: {
            commonName: "",
            scientificName: "",
            description: "",
            color: "",
            edibility: "",
            locations: "",
            experts: "",
            pictureUrl: "",
            wikipediaUrl: ""
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

        if (this.state.formData.commonName === "") {
            this.setState({ errorMessage: "The common name is empty!" })
            return;
        }
        if (this.state.formData.scientificName === "") {
            this.setState({ errorMessage: "The scientific name is empty!" })
            return;
        }
        if (this.state.formData.color === "") {
            this.setState({ errorMessage: "The color is empty!" })
            return;
        }
        if (this.state.formData.description === "") {
            this.setState({ errorMessage: "The desciption is empty!" })
            return;
        }
        if (this.state.formData.edibility === "") {
            this.setState({ errorMessage: "The edibility is empty!" })
            return;
        }
        if (this.state.formData.locations === "") {
            this.setState({ errorMessage: "The location is empty!" })
            return;
        }
        if (this.state.formData.pictureUrl === "") {
            this.setState({ errorMessage: "The picture URL is empty!" })
            return;
        }
        if (this.state.formData.wikipediaUrl === "") {
            this.setState({ errorMessage: "The wikipedia URL is empty!" })
            return;
        }
        const apiURL = process.env.REACT_APP_API_URL

        //make API call to add data to the database
        fetch(`${apiURL}/api/mushrooms`, {
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
                    this.setState({ successMessage: "Mushroom is added successfully" });
                    const message = "Mushroom is added successfully"
                    //programatically redirect to another route on success
                    this.props.history.push(`/mushrooms?message=${message}`)
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
                
                <h3 className="text-center"  >Add a Mushroom</h3>
                <br/>
                <MushroomForm
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

export default mustBeAuthenticated(AddMushroom)