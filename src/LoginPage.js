import React, {Fragment} from "react";
import AuthDataService from "./services/auth";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm"
import FlashMessage from "react-flash-message";
import AuthMessage from "./AuthMessage";

export default function LoginPage () {

    const [newUser, setNewUser] = useState({
        username: "",
        password: ""
    });

    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState();
    
    const handleInputChange = (evt) => {
        setNewUser({...newUser, [evt.target.name]: evt.target.value})
    }

    // const signupUser = async (evt) => {
    //     evt.preventDefault();
    //     const data = {
    //         username: newUser.username,
    //         password: newUser.password
    //     }
    //     const response = await AuthDataService.registerUser(data)
    //     // console.log(response)
    //     setRegistered(response.data.success)
    // }

        const signinUser = async (evt) => {
            evt.preventDefault();
            const data = {
                username: newUser.username,
                password: newUser.password
            }
            const response = await AuthDataService.loginUser(data)
            console.log(response)
            setRegistered(response.data.success)
            setError(response.data.err)
        }

    return ( 
        <Fragment>
            {registered ? (
                <Redirect to =
                {{
                    pathname: "/summary",
                    state: {msg: `Successfully Logged You in, as ${newUser.username} cheers`}
                }}
                /> )   
        : (
            <>
            {error !== undefined ? 
                (
                    <>
                    <FlashMessage duration = {3000}> 
                        <AuthMessage> Invalid Username or Password </AuthMessage>
                    </FlashMessage>
                    <LoginForm signinUser = {signinUser} handleInputChange = {handleInputChange}/>
                    </> 
                )
                : (
               <LoginForm signinUser = {signinUser} handleInputChange = {handleInputChange}/>
            )}
        </>
    )}
</Fragment>
    )}