import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <React.Fragment>
            <h1>Welcome!!!</h1>
            <Link to={"/find"}> Искать </Link>
        </React.Fragment>
    )
}