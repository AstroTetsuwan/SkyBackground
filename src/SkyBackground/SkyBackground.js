import React from 'react';

import Star from './Star';
import './SkyBackground.css';
import ShootingStar from './ShootingStar';

class SkyBackground extends React.Component{
  
    constructor(props){
        super(props);

        this.state = {
            stars: this.getStars(),
            shootingStars: this.getShootingStars()
        }

        this.interval = false;
    }

    componentDidMount(){
        this.interval = window.setInterval(() => {
            this.setState({
                shootingStars: this.getShootingStars()
            });
        }, 10000);
    }

    getStars(){
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
    
        return stars;
    }

    getShootingStars(){
        let shootingStars = [];
        let randomNumberOfShootingStars = Math.random() * (10 - 5) + 5;
        for(let i = 0; i < randomNumberOfShootingStars; i++){
            shootingStars.push(
                <ShootingStar key={i} id={i} 
                    topStart={Math.random() * (50 - 20) + 20}  
                    topLeft={Math.random() * (50 - 20) + 20} 
                    delay={Math.random() * (5000 - 100) + 100}/>
            );
        }
        return shootingStars;
    }
    
    render(){

        return(
            <div id="sky-background">
                {this.state.shootingStars}
                {this.state.stars}
            </div>
        );
    }
    
}

export default SkyBackground;