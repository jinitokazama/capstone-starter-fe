import isAuthenticated from "../../utils/isAuthenticated"
import Header from "../../components/header/Header";
import RecipeGridCards from "../../components/gridcards/RecipeGridCards";


function Recipe(props) {
  return (
    <div className="Recipe">
<<<<<<< HEAD
      <Header isAuthenticated={isAuthenticated} />
=======
      <Header isAuthenticated={isAuthenticated()}/>
>>>>>>> fb1d1d3863df2f62c77389bd5bc80bf6fe0f0507
      <RecipeGridCards />
    </div>
  );
}



export default Recipe;


