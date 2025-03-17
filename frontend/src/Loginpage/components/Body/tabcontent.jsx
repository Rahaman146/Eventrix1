import React from "react";
import Cards from "./cards";
import Button from "./button";
import Tabhead from "./tabhead";
import cardcontent from "./cardcontent";

function Carditemf(Carditem) {
    return <Cards key={Carditem.key} title={Carditem.title} value={Carditem.value} />
}
function Tabscontent() {
    return (<div className="signup-tab-content">
        <Tabhead />
        <div className="signup_signup-form-block">
            <form className="signup_signup-form" action="/check" method="POST">
                {cardcontent.map(Carditemf)}
                <div className="signup_form_field-wrapper">
                    <label className="signup_form_field-label">Password*</label>
                    <input className="signup_form_input" type="password" placeholder="Enter Password" />
                </div>
                <Button />
            </form>
        </div>
    </div>);
}
export default Tabscontent;