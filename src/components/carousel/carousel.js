import React from "react";
import "./carousel.css";

import { Carousel } from 'react-responsive-carousel';

class DynamicCarousel extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            src: props.src
        }
    }

    render() {
        const imageJSON = this.state.src;

        return(
            <Carousel>
                {imageJSON.map(item => {
                    return <div>
                        <img src={process.env.PUBLIC_URL + "/" + item.image}></img>
                        <p className="legend">{item.legend}</p>
                    </div>
                })}
            </Carousel>
        )
    }
}

export default DynamicCarousel;