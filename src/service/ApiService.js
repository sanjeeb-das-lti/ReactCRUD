import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/users";

class ApiService {
  fetchUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  fetchUserById(userId) {
    return axios.get(USER_API_BASE_URL + "/" + userId);
  }

  deleteUser(userId) {
    return axios.delete(USER_API_BASE_URL + "/" + userId);
  }

  addUser(user) {
    return axios.post("" + USER_API_BASE_URL + "/addUser", user);
  }

  updateUser(user) {
    /* const config = { headers: { "Access-Control-Allow-Origin": "*" } }; */
    return axios.put(USER_API_BASE_URL, user);
  }
}

export default new ApiService();
