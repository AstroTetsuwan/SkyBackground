import React from 'react';

function Sun(props){

    let style = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "radial-gradient(yellow, gold)",
        boxShadow: "0 0 20px #f4c5d8",
        position: "absolute",
        top: "100px",
        left: "900px"
    };

    return(
        <div id="sun" style={style}>
        </div>
    );
}

export default Sun;
