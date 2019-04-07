import React from 'react';

import  './Planet.css';

import Earth from './Earth';
import Saturn from './Saturn';

function Planet(props){

    if(props.name === "earth"){ return <Earth/>; }
    if(props.name === "saturn"){ return <Saturn/>; }
    return(
        <div id={props.name} className="planet">
        </div>
    );
}

export default Planet;
