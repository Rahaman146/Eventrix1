import React from "react";

function Cards(props) {
    return (<div className="signup_form_field-wrapper">
        <label className="signup_form_field-label">{props.title}</label>
        <input className="signup_form_input" type="text" placeholder={props.value} />
    </div>);
}
export default Cards;