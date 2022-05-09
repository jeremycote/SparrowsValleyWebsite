import React from "react";
import "./artist-spotlight-grid.css"

import ArtistSpotlight from "./artist-spotlight";

class ArtistSpotlightGrid extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <ArtistSpotlight/>
                <ArtistSpotlight/>
                <ArtistSpotlight/>
                <ArtistSpotlight/>
            </div>
        )
    }
}

export default ArtistSpotlightGrid