import React from "react";
import "./nav-header.css"

// Routes
import { Link } from "react-router-dom";
import Concerts from "../../routes/concerts";

class NavHeader extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/songs">Songs</Link>
                <Link to="/concerts">Concerts</Link>
                <a className="spacer-left">Instagram</a>
                <a>Social</a>
            </div>
        )
    }
}

export default NavHeader