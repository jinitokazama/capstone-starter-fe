import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class RecipeGridCards extends Component {

    state = {
        recipeData: [
            {
              "description": "Simple garlic mushroosn cooked on a pan.",
              "tags": [
                "Garlic"
              ],
              "title": "Garlic Mushrooms",
              "source": "https://damndelicious.net/2017/05/16/sheet-pan-garlic-butter-mushrooms/",
              "ingredients": [
                "1/4 cup unsalted butter, melted",
                "4 cloves garlic, minced",
                "1 tablespoon freshly squeezed lemon juice, optional",
                "1 teaspoon dried thyme",
                "1/2 teaspoon dried rosemary",
                "Kosher salt and freshly ground black pepper, to taste",
                "3 pounds cremini mushrooms  "
              ],
              "directions": [
                "Preheat oven to 375 degrees F. Lightly oil a baking sheet or coat with nonstick spray.",
                "In a small bowl, whisk together butter, garlic, lemon juice, thyme and rosemary; season with salt and pepper, to taste.",
                "Place mushrooms in a single layer onto the prepared baking sheet. Stir in butter mixture and gently toss to combine.",
                "Place into oven and bake for 12-15 minutes, or until browned and tender, tossing occasionally.",
                "Serve immediately.  "
              ]
            },
            {
              "description": "Authentic Italian style Risotto",
              "tags": [
                "Garlic"
              ],
              "title": "Mushroom Risotto",
              "source": "https://www.allrecipes.com/recipe/85389/gourmet-mushroom-risotto/",
              "ingredients": [
                "6 cups chicken broth, divided",
                "3 tablespoons olive oil, divided",
                "1 pound portobello mushrooms, thinly sliced",
                "1 pound white mushrooms, thinly sliced",
                "2 shallots, diced",
                "1 1/2 cups Arborio rice",
                "1/2 cup dry white wine",
                "sea salt to taste",
                "freshly ground black pepper to taste",
                "3 tablespoons finely chopped chives",
                "4 tablespoons butter",
                "1/3 cup freshly grated Parmesan cheese"
              ],
              "directions": [
                "In a saucepan, warm the broth over low heat.",
                "Warm 2 tablespoons olive oil in a large saucepan over medium-high heat.",
                "Stir in the mushrooms, and cook until soft, about 3 minutes. Remove mushrooms and their liquid, and set aside.",
                "Add 1 tablespoon olive oil to skillet, and stir in the shallots.",
                "Cook 1 minute. Add rice, stirring to coat with oil, about 2 minutes. When the rice has taken on a pale, golden color, pour in wine, stirring constantly until the wine is fully absorbed.",
                "Add 1/2 cup broth to the rice, and stir until the broth is absorbed. Continue adding broth 1/2 cup at a time, stirring continuously, until the liquid is absorbed and the rice is al dente, about 15 to 20 minutes.",
                "Remove from heat, and stir in mushrooms with their liquid, butter, chives, and parmesan. Season with salt and pepper to taste."
              ]
            },
            {
                "description": "Authentic Italian style Risotto",
                "tags": [
                  "Garlic"
                ],
                "title": "Mushroom Risotto",
                "source": "https://www.allrecipes.com/recipe/85389/gourmet-mushroom-risotto/",
                "ingredients": [
                  "6 cups chicken broth, divided",
                  "3 tablespoons olive oil, divided",
                  "1 pound portobello mushrooms, thinly sliced",
                  "1 pound white mushrooms, thinly sliced",
                  "2 shallots, diced",
                  "1 1/2 cups Arborio rice",
                  "1/2 cup dry white wine",
                  "sea salt to taste",
                  "freshly ground black pepper to taste",
                  "3 tablespoons finely chopped chives",
                  "4 tablespoons butter",
                  "1/3 cup freshly grated Parmesan cheese"
                ],
                "directions": [
                  "In a saucepan, warm the broth over low heat.",
                  "Warm 2 tablespoons olive oil in a large saucepan over medium-high heat.",
                  "Stir in the mushrooms, and cook until soft, about 3 minutes. Remove mushrooms and their liquid, and set aside.",
                  "Add 1 tablespoon olive oil to skillet, and stir in the shallots.",
                  "Cook 1 minute. Add rice, stirring to coat with oil, about 2 minutes. When the rice has taken on a pale, golden color, pour in wine, stirring constantly until the wine is fully absorbed.",
                  "Add 1/2 cup broth to the rice, and stir until the broth is absorbed. Continue adding broth 1/2 cup at a time, stirring continuously, until the liquid is absorbed and the rice is al dente, about 15 to 20 minutes.",
                  "Remove from heat, and stir in mushrooms with their liquid, butter, chives, and parmesan. Season with salt and pepper to taste."
                ]
              }
          ]
    }


    render() {
        return (
            <div className="GridCards container mb-3">
                <Row xs={1} lg={3} className="g-4">
                    {this.state.recipeData.map((recipe, i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Img variant="top" src="http://via.placeholder.com/300" />
                                <Card.Body>
                                    <Card.Title>{recipe.title}</Card.Title>
                                    <Card.Text>
                                        {recipe.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}
export default RecipeGridCards;

