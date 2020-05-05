import React, { Component } from "react";
import ApiService from "../../service/ApiService";

class AddUserComponent extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    salary: "",
    message: "",
  };
  componentDidMount() {
    if (window.localStorage.getItem("username", "user")) {
    } else {
      this.props.history.push("/");
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("In the handle Submit method");
    let user = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      salary: this.state.salary,
    };
    ApiService.addUser(user).then((data) =>
      this.setState({ message: "Added message" })
    );
    this.props.history.push("/users", this.state.message);
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Add User</h2>

        <form style={{ width: "300px" }}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              className="form-control"
              onChange={this.handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              className="form-control"
              onChange={this.handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              placeholder="firstName"
              name="firstName"
              value={this.state.firstName}
              className="form-control"
              onChange={this.handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="lastName"
              name="lastName"
              value={this.state.lastName}
              className="form-control"
              onChange={this.handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              placeholder="age"
              name="age"
              value={this.state.age}
              className="form-control"
              onChange={this.handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Salary:</label>
            <input
              type="number"
              placeholder="salary"
              name="salary"
              value={this.state.salary}
              className="form-control"
              onChange={this.handleOnChange}
              required
            />
          </div>
          <button
            className="btn btn-success btn-lg"
            onClick={this.handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default AddUserComponent;
