import { Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const LoginWidget = ({ config }) => {
    const { oktaAuth, authState } = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    return authState.isAuthenticated ?
    <Redirect to= {{pathname: '/' }} />
    :
    <div>

    </div>
}

export default LoginWidget