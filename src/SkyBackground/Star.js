import React from 'react';

import './Star.css';

function Star(props){
    let size = Math.random() * (2 - 1) + 1;
    let style = {
        top: props.top + "px",
        left: props.left + "px",
        width: size + "px",
        height: size + "px",
        boxShadow: "0 0 " + size + "px"  + "#FFF",
        animationDelay: (Math.random() * (2 - 0.2) + 0.2) + "s"
    };

    //more or less one chance in three to twinkle
    let willItTwinkle = Math.round(Math.random() * (3 - 1) + 1) === 2 ? "star twinkling-star" : "star";

    return(
        <div className={willItTwinkle} style={style}></div>
    );
}

export default Star;