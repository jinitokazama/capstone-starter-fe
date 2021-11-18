import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Protected from "./pages/protected/Protected";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import UpdateUser from "./pages/updateUser/UpdateUser";
import Recipe from "./pages/recipe/Recipe";
import Tools from './pages/tools/Tools';
import Mushroom from "./pages/mushrooms/Mushrooms";
import AddMushroom from "./pages/addMushroom/addMushroom";
import EditMushroom from "./pages/updateMushroom/updateMushroom"
import AddTools from "./pages/tools/AddTools";
import AddRecipe from "./pages/recipe/AddRecipe";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/tools"
          component={Tools}
        />
        <Route
          exact
          path="/register"
          component={Register}
        />
        <Route
          exact
          path="/updateuser/:email"
          component={UpdateUser}
        />
        <Route
          exact
          path="/protected"
          component={Protected}
        />
        <Route
          exact
          path="/recipes"
          component={Recipe}
        />
        <Route
          exact
          path="/mushrooms"
          component={Mushroom}
        />
        <Route
          exact
          path="/addMushroom"
          component={AddMushroom}
        />
        
        <Route
          exact
          path="/addTool"
          component={AddTools}
        />
        <Route
          exact
          path="/editMushroom/:mushroomId"
          component={EditMushroom}
        />
        <Route
          exact
          path="/addRecipe"
          component={AddRecipe}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
        
        
      </Switch>
    </div>
  );
}

export default App;
