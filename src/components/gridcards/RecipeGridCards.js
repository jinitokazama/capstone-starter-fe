import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button, { DropdownButton } from 'react-bootstrap';
import { generateAuthHeader } from '../../utils/authHelper';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-overlays/esm/DropdownMenu';

class RecipeGridCards extends Component {

  state = {
    recipeData: []

  }

  //when the component mounts (displays on screen) get the student from the API
  componentDidMount() {

    this.getRecipes()

  }

  getRecipes = () => {

    //get API url from the environment variables
    const apiURL = process.env.REACT_APP_API_URL

    //use fetch to make an API call and get a specific student (returns a promise)
    fetch(`${apiURL}/api/recipes`, {
      headers: {
        ...generateAuthHeader()
      }
    })
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success of turnig the response into JSON (data we can work with), lets add that data to state
      .then((data) => {


        //update state with the data from the API causing the page to re-render
        this.setState({
          recipeData: data
        });
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error)
      });
  }



  render() {
    return (
      <div className="GridCards px-5 mb-3">
        <Row xs={1} lg={4} className="g-4">
          {this.state.recipeData.map((recipe, i) => (

            <Col className="mb-4" key={i}>
              <Card className="h-100 ">
                <Card.Img  variant="top" src={recipe.source} />
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{recipe.description}</Card.Subtitle>
                <h5>Ingredients:</h5>
                {recipe.ingredients.map((ingredientstep) => (
                  <li>{ingredientstep}</li>
                ))}
                <h5>Directions:</h5>
                {recipe.directions.map((ingredientDirectionStep) => (
                  <li>{ingredientDirectionStep}</li>
                ))}

              </Card>
            </Col>
          ))
          }
        </Row>
      </div >
    );
  }
}
export default RecipeGridCards;