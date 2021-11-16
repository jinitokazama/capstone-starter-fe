import Header from "../../components/header/Header";
import RecipeGridCards from "../../components/gridcards/RecipeGridCards";


function Recipe(props) {
  return (
    <div className="Recipe">
        <Header/>
        <RecipeGridCards/>
    </div>
  );
}

export default Recipe;
