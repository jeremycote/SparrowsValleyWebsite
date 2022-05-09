import React from "react";
import "./nav-header.css"

class NavHeader extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="header">
                <a>Home</a>
                <a>Songs</a>
                <a>Concerts</a>
                <a className="spacer-left">Instagram</a>
                <a>Social</a>
            </div>
        )
    }
}

export default NavHeader