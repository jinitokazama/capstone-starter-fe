import isAuthenticated from "../../utils/isAuthenticated"
import Header from "../../components/header/Header";
import RecipeGridCards from "../../components/gridcards/RecipeGridCards";

function Recipe(props) {
  return (
    <div className="Recipe">
      <Header isAuthenticated={isAuthenticated()}/>
      <RecipeGridCards />
    </div>
  );
}



export default Recipe;


