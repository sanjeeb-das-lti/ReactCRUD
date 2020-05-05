import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./component/NavBarComponent";
import AddUserComponent from "./component/user/AddUserComponent";
import EditUserComponent from "./component/user/EditUserComponent";
import ListUserComponent from "./component/user/ListUserComponent";
import LoginComponent from "./component/login/LoginComponent";
import About from "./component/user/AboutComponent";

import "./App.css";
import LogoutComponent from "./component/login/logout";

function App() {
  return (
    <Router>
      <div
        id="header"
        style={{ color: "white", backgroundColor: "purple", padding: "10px" }}
      >
        <h2 style={{ textAlign: "center" }}>User Works Company</h2>
      </div>

      <NavBar />
      <div id="outerDiv">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route path="/" exact component={LoginComponent} />
                <Route path="/users" component={ListUserComponent} />
                <Route path="/add-user" component={AddUserComponent} />
                <Route path="/edit-user" component={EditUserComponent} />
                <Route path="/about" component={About} />
                <Route path="/logout" component={LogoutComponent} />
              </Switch>
            </div>
            {/* <div class="col-md-1">
            <br />
            <img src={users} alt="Users" />
          </div> */}
          </div>
        </div>

        <br />
        <br />
        <div>
          <footer>
            <span className="text-danger">
              <strong>
                This site is copyright &copy; to LTI. All rights are reserved
                here ..!
              </strong>
            </span>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
