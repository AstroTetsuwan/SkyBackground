import React from 'react';

import './Star.css';

function Star(props){
    let size = Math.random() * (3 - 1) + 1;
    let style = {
        top: props.top + "px",
        left: props.left + "px",
        width: size,
        height: size,
        boxShadow: "0 0 " + size + "px"  + "#FFF",
        animationDelay: (Math.random() * (1 - 0.2) + 0.2) + "s"
    };



    return(
        <div className="star" style={style}></div>
    );
}

export default Star;