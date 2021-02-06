import React, { useState, createContext} from "react";
import AuthDataService from "./services/auth";

const authContext = createContext();

export default function ProvideAuth ( { children }) {

    const [registered, setRegistered] = useState(false)

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState();

    const signinUser = async (evt) => {
        evt.preventDefault();
        const data = {
            username: user.username,
            password: user.password
        }
        const response = await AuthDataService.loginUser(data)
        console.log(response)
        if (response.data.success) {
            return setRegistered(response.data.success)
        } else {
            return setError(response.data.err) 
        }
    }
    
    const handleChange = (evt) => {
        setUser({...user, [evt.target.name]: evt.target.value})
    }

    return (
        <authContext.Provider value = {{registered, error, user, signinUser, handleChange}}>
            {children}
        </authContext.Provider>
    )
}

export {authContext}