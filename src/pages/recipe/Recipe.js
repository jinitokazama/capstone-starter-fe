import Header from "../../components/header/Header";
import RecipeGridCards from "../../components/gridcards/RecipeGridCards";
import isAuthenticated from "../../utils/isAuthenticated";

function Recipe(props) {
  return (
    <div className="Recipe">
      <Header isAuthenticated={isAuthenticated()}/>
      <RecipeGridCards />
    </div>
  );
}



export default Recipe;


