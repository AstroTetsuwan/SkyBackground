import React from 'react';

import Star from './Star';
import './SkyBackground.css';
import ShootingStar from './ShootingStar';

function SkyBackground(props){
  
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
        let wBlocks = Math.ceil(windowWidth / 100);
        let hBlocks = Math.ceil(windowHeight / 100);
        let stars = [];

        for(let i = 0; i < wBlocks; i++){
            for(let j = 0; j < hBlocks; j++){
                let randomNumberOfStarsInThisBlock = Math.random() * (20 - 10) + 10;
                for(let k = 0; k < randomNumberOfStarsInThisBlock; k++){
                    let randomStarLeft = Math.random() * (((i+1) * 100) - (i * 100)) + (i * 100);
                    let randomStarTop = Math.random() * (((j+1) * 100) - (j * 100)) + (j * 100);
                    if(randomStarLeft < windowWidth && randomStarTop < windowHeight){
                        stars.push(<Star key={i + "-" + j + "-" + k} top={randomStarTop} left={randomStarLeft}/>);
                    }                    
                }
            }
        }

        
        let shootingStar =  <ShootingStar screenHeight={windowHeight} screenWidth={windowWidth}/>


        //ShootingStar will be the ones moving, with a size that increase from 0 to 5 then decrease to 0 when disappearing. (In groups of shootingstars?)

        return(
            <div id="sky-background">
                {stars}
                {shootingStar}
            </div>
        );
    
}

export default SkyBackground;