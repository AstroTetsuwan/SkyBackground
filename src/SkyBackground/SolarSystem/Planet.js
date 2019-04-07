import React from 'react';

import  './Planet.css';

function Planet(props){
    return(
        <div id={props.name} className="planet">
        </div>
    );
}

export default Planet;
