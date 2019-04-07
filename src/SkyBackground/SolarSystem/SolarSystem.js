import React from 'react';

import Sun from './Sun';
import Planet from './Planet';
import Earth from './Earth';
import Saturn from './Saturn';

import './SolarSystem.css';


function SolarSystem(props){

    return(
        <div id="solar-system-wrapper">
            <div id="solar-system">
                <Sun/>
                <Planet name="mercury"/>
                <Planet name="venus"/>
                <Planet name="earth"/>
                <Planet name="mars"/>
                <Planet name="jupiter"/>
                <Planet name="saturn"/>
                <Planet name="uranus"/>
                <Planet name="neptune"/>
            </div>
        </div>
    );

}

export default SolarSystem;