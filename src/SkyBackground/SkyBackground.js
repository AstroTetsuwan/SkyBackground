import React from 'react';

import Star from './Star';
import './SkyBackground.css';

class SkyBackground extends React.Component {
    render(){


        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
        let stars = [];
        var info = "W:" + w + "-H:" + h;
        console.log(info);

        //ShootingStar will be the ones moving, with a size that increase from 0 to 5 then decrease to 0 when disappearing. (In groups of shootingstars?)

        return(
            <div id="sky-background">
                <Star top={10} left={80}/>
                <Star top={50} left={50}/>
            </div>
        );
    }
}

export default SkyBackground;