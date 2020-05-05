import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <Link
          to="/"
          className="nav-link"
          style={{ fontFamily: "Verdana" }}
          onClick={() => window.localStorage.clear()}
        >
          Home
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/users"
              className="nav-link"
              style={{ fontFamily: "Verdana", color: "red" }}
            >
              User List
            </Link>
            <Link
              to="/add-user"
              className="nav-link"
              style={{ fontFamily: "Verdana", color: "orange" }}
            >
              Add User
            </Link>
            <Link
              to="/about"
              className="nav-link "
              style={{ fontFamily: "Verdana", color: "cyan" }}
            >
              About
            </Link>
            <Link
              to="/logout"
              className="nav-link "
              style={{
                fontFamily: "Verdana",
                color: "grey",
                textAlign: "right",
                float: "right",
                marginLeft:"900px"
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
