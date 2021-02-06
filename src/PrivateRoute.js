import {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import { authContext } from "./ProvideAuth";
  
    export default function PrivateRoute({ children, ...rest}) {
        const auth =  useContext(authContext)
        return (
        <Route
            {...rest}
            render={({ location }) =>
            auth.registered ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                />
            )
            }
        />
        );
    }