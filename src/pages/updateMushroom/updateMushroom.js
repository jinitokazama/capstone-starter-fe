import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import { generateAuthHeader } from "../../utils/authHelper";
import Alert from 'react-bootstrap/Alert';
import Header from "../../components/header/Header";
import UpdateMushroomForm from "./updateMushroomForm";

class UpdateMushroom extends Component {

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

    componentDidMount() {
        const mushroomId = this.props.match.params.mushroomId;
        console.log(mushroomId)
        this.getMushroom(mushroomId)
    }

    getMushroom = (mushroomId) => {
        const apiURL = process.env.REACT_APP_API_URL

        fetch(`${apiURL}/api/mushrooms/${mushroomId}`, {
            headers: {
                ...generateAuthHeader()
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    formData: { ...this.state.formData, ...data }
                });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    handleChange = (event) => {
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
        const apiURL = process.env.REACT_APP_API_URL
        const mushroomId = this.props.match.params.mushroomId;
        const newMushroomData = { ...this.state.formData }
        fetch(`${apiURL}/api/mushrooms/${mushroomId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                ...generateAuthHeader()
            },
            body: JSON.stringify(newMushroomData)
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ successMessage: "Mushroom Updated Successfully" })
                this.getMushroom(mushroomId)
                //programatically redirect to another route on success
                this.props.history.push(`/mushrooms`)
            })
            .catch(e => console.log(e.message))

    }

    render() {
        return (
            <div className="UpdateMushroom">
                <Header isAuthenticated={this.props.isAuthenticated} />

                <h3 className="text-center" >Edit an existing mushroom</h3>
                <UpdateMushroomForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                    isUpdate={true}
                />
                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                    {this.state.successMessage && <Alert variant="info">{this.state.successMessage}</Alert>}
                </div>
            </div>
        )
    }
}

export default mustBeAuthenticated(UpdateMushroom)
