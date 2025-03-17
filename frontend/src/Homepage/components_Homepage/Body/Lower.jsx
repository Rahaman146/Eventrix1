import React from "react";

function Lower() {
    return (
        <form action="/search" className="homepage_body-lower">
            <input placeholder="Search" name="query" className="homepage_body-lower-input homepage_body-lower-input-1" />
            <input type="submit" className="homepage_body-lower-button homepage_body-lower-button-1 homepage_hover-button" />
        </form>
    );
}
export default Lower;