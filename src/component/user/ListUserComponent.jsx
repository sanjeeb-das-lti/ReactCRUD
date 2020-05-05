import React, { Component } from "react";
import ApiService from "../../service/ApiService";

class ListUserComponent extends Component {
  state = { users: [], message: "" };

  componentDidMount() {
    if (window.localStorage.getItem("username", "user")) {
      this.reloadUserList();
    } else {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ message: nextProps.message });
  }

  reloadUserList = () => {
    ApiService.fetchUsers().then((resp) =>
      this.setState({ users: resp.data.result })
    );
  };

  handleEditUser = (id) => {
    window.localStorage.setItem("userId", id);
    this.props.history.push("/edit-user");
  };

  handleAddUser = () => {
    window.localStorage.removeItem("userId");
    this.props.history.push("/add-user");
  };

  handleDeleteUser = (id) => {
    ApiService.deleteUser(id).then((resp) =>
      this.setState({ message: resp.data.message })
    );
    this.setState({ users: this.state.users.filter((user) => user.id !== id) });
    alert("User deleted succesfully");
  };

  render() {
    return (
      <div className="container">
        <br />
        <h2>User Details</h2>
        <button
          className="btn btn-outline-success"
          style={{ width: "100px" }}
          onClick={() => {
            this.handleAddUser();
          }}
        >
          ADD
        </button>
        <table
          className="table table-striped table-bordered  table-md"
          style={{ width: "850px", padding: "10px", marginTop: "18px" }}
        >
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.username}</td>
                  <td>{data.age}</td>
                  <td>{data.salary}</td>
                  <td>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => this.handleEditUser(data.id)}
                    >
                      EDIT
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        if (window.confirm("You want to delete the user ?")) {
                          this.handleDeleteUser(data.id);
                        }
                      }}
                      style={{ marginLeft: "25px" }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListUserComponent;
