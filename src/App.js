import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import SigninScreen from "./component/signin";
import RegisterScreen from "./component/register";
import AddPlants from "./component/addPlant";
import PlantsList from "./component/plantList";
import { signout } from "./actions/userAction";

function App() {
  const userSignIn = useSelector((state) => state.userSignin);
  const { isLoggedIn, loggedInUser } = userSignIn;

  return (
    <React.StrictMode>
      <Router>
        {isLoggedIn ? (
          <header className="row">
            <div>
              <Link to="">
                <h1>{loggedInUser.name}</h1>
              </Link>
            </div>
            <div>
              <Link to="/signout">Sign Out</Link>
            </div>
          </header>
        ) : null}
        <Switch>
          <Route exact path="/" component={SigninScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/addPlant" component={AddPlants} />
          <Route path="/plants" component={PlantsList} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;