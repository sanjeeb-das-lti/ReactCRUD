import React, { Component } from "react";

class LoginComponent extends Component {
  state = {
    username: "",
    password: "",
    errorPassMessage: "",
    errorMessage: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = (e) => {
      let currentUsername = this.state.username
      let currentPassword = this.state.password
    if (currentUsername !== ("user" && "admin")) {
      this.setState({ errorMessage: "Username is wrong" });
    } else if (currentPassword !== ("pass123" && "admin")) {
      this.setState({ errorPassMessage: "Password is wrong" });
    } else {
      window.localStorage.setItem("username", this.state.username);
      this.props.history.push("/users");
    }
  };

  render() {
    return (
      <div className="container" id="login">
        <h2 style={{ textAlign: "center" }}>Login Details</h2>
        <div
          className="container"
          style={{ marginTop: "50px", marginBottom: "180px" }}
        >
          <form style={{ width: "200px" }}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                className="form-control"
              />

              <p style={{ color: "red" }}>{this.state.errorMessage}</p>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
              />
              <p style={{ color: "red" }}>{this.state.errorPassMessage}</p>
            </div>
            <button
              className="btn btn-outline-primary"
              onClick={this.handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
