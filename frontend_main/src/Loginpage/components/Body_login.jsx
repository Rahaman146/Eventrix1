import React from "react";
import Tabscontent_login from "./Body/tabcontent_login";
import Tabs from "./Body/tabs";
function Body_login({ onLoginSuccess }) {
    return (
        <div className="login_content-left">
            <div className="signup_tabs">
                <Tabs />
                <Tabscontent_login onLoginSuccess={onLoginSuccess} />
            </div>
        </div>
    );
}

export default Body_login;
