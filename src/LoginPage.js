import React, {Fragment, useContext } from "react";
import {Redirect, useLocation, useHistory} from "react-router-dom";
import LoginForm from "./LoginForm"
import FlashMessage from "react-flash-message";
import { authContext } from "./ProvideAuth";
import AuthMessage from "./AuthMessage";

export default function LoginPage () {
    const auth = useContext(authContext)
    let history = useHistory ();
    let location = useLocation ();
    let {from} = location.state || {from: {pathname: "/"}}

    return ( 
       
        <Fragment>
            {auth.registered ? (
                <>
                {from.pathname === "/" ? <Redirect to = {{ pathname:"/summary", state: {from: "/"} }} /> : history.replace(from, [location.state]) }) </>
                )   
                : (
                <>
                    {auth.error !== undefined ? 
                        (
                            <>
                                {history.go(0)}
                                <FlashMessage duration = {3000}> 
                                    <AuthMessage> Invalid Username or Password </AuthMessage>
                                </FlashMessage>
                                <LoginForm /> 
                            </> 
                        )
                        :  (
                                <>
                                    {from.pathname !== "/" ? 
                                        (
                                            <>
                                                <FlashMessage duration = {3000}> 
                                                    <AuthMessage> You don't have permission to do that. Please Login to view the page at {from.pathname} </AuthMessage>
                                                </FlashMessage>
                                                <LoginForm />
                                            </>
                                        )
                                        : (
                                            <LoginForm />
                                        )}
                                </>
                            )
                    }    
                </>
            )}
        </Fragment>
    )}
