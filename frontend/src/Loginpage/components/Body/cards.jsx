import React from "react";

function Cards({ title, value, onChange }) {
    return (
        <div className="signup_form_field-wrapper">
            <label className="signup_form_field-label">{title}</label>
            <input
                className="signup_form_input"
                type="text"
                placeholder={title}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Cards;

