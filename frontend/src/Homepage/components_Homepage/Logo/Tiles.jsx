import React from "react";

function Tiles(props) {
    return (<a href={props.href} className="homepage_tiles">
        {props.content}
    </a>);
}
export default Tiles;