import { _axios } from './api';

export const signUpUser = (data) => {
    return _axios.post("/auth/signup", data)
}

export const signInUser = (data) => _axios.post("/auth/login", data)

export const LogOut = () => _axios.get("/auth/logout")
