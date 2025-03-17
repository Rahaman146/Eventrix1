import React from "react";
import Tiles from "./Tiles";

function Left_Logo() {
    return (<nav role="navigation" className="homepage_left-logo-div-0">
        <Tiles href="https://www.google.com/" content="Events" />
        <Tiles href="https://www.google.com/" content="Home" />
        <Tiles href="https://www.google.com/" content="Councils" />
        <Tiles href="https://www.google.com/" content="Cells" />
        <Tiles href="https://www.google.com/" content="Fests" />
    </nav>);
}
export default Left_Logo;