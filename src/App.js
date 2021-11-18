import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Protected from "./pages/protected/Protected";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import UpdateUser from "./pages/updateUser/UpdateUser";
import Tools from './pages/tools/Tools';
import Mushroom from "./pages/mushrooms/Mushrooms";
import AddMushroom from "./pages/addMushroom/addMushroom";
import EditMushroom from "./pages/updateMushroom/updateMushroom"


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
          path="/editMushroom/:mushroomId"
          component={EditMushroom}
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
