import React from "react";
import Cards from "./cards";
import Button from "./button";
import Tabhead from "./tabhead";
import cardcontent_login from "./cardcontent_login";

function Carditemf(Carditem) {
    return <Cards key={Carditem.key} title={Carditem.title} value={Carditem.value} />
}
function Tabscontent_login() {
    return (<div className="signup-tab-content">
        <Tabhead />
        <div className="signup_signup-form-block">
            <form className="signup_signup-form" action="/check" method="POST">
                {cardcontent_login.map(Carditemf)}
                <div className="password_login-wrapper">
                    <div className="password_login">
                        <div className="password_login-1">
                            Password*
                        </div>
                        <a href="https://www.youtube.com/" className="password_login-2">
                            Forgot your password?
                        </a>
                    </div>
                    <input className="signup_form_input" type="text" placeholder="password" />
                </div>
                <Button />
                <div className="noaccount_login">
                    <div className="noaccount_login-1">
                        Don't have an account? Sign up
                    </div>
                </div>
            </form>
        </div>
    </div>);
}
export default Tabscontent_login;