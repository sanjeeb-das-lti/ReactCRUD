import React, { Component } from "react";
import ApiService from "../../service/ApiService";
import "./forms.css";

class EditUserComponent extends Component {
  state = {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    salary: "",
    message: "",
  };

  componentDidMount() {
   if( window.localStorage.getItem("username","user")){
    this.loadUser();
   }else {
    this.props.history.push("/");
   }
    
  }

  loadUser = () => {
    ApiService.fetchUserById(window.localStorage.getItem("userId")).then(
      (resp) => {
        let user = resp.data.result;
        this.setState({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          salary: user.salary,
        });
      }
    );
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      salary: this.state.salary,
    };
    ApiService.updateUser(user).then(this.setState({ message: "Updated" }));
    this.props.history.push("/users", this.state.mess);
  };

  render() {
    return (
      <div className="container">
        <h2 style={{ fontStyle: "bold" }}>Edit User</h2>
        <form style={{ width: "300px" }}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              className="form-control"
              name="username"
              defaultValue={this.state.username}
              readOnly={true}
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              placeholder="firstName"
              className="form-control"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="lastName"
              className="form-control"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              placeholder="age"
              className="form-control"
              name="age"
              value={this.state.age}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <label>Salary:</label>
            <input
              type="text"
              placeholder="salary"
              className="form-control"
              name="salary"
              value={this.state.salary}
              onChange={this.handleOnChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.handleUpdateUser}>
            UPDATE
          </button>
        </form>
      </div>
    );
  }
}

export default EditUserComponent;
