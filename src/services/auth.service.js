import axios from "axios";

const API_URL = "https://jwtportfolio.herokuapp.com/api/auth/";

const register = (data) => {
    return axios.post(API_URL + "signup", {
        username: data.username,
        email: data.email,
        password: data.password,
    });
};

const login = (data) => {
    return axios.post(API_URL + "signin", {
        username: data.username,
        password: data.password,
    })
    .then((response) => {
        if (response.data.accessToken){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};
export default AuthService;