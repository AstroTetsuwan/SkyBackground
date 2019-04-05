import React from 'react';

import './ShootingStar.css';

class ShootingStar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            style:{
                width: 0,
                height: 0,
                top: Math.random() * (props.screenHeight),
                left: Math.random() * (props.screenWidth)
            }
        };
    }

    componentDidMount(){

        let xDirection = Math.random() * (2 - 1) + 1;
        let yDirection = Math.random() * (2 - 1) + 1;

        let positionInterval = window.setInterval(() => { 
            let newTop = yDirection === 1 ? this.state.top - 1 : this.state.top + 1;
            let newLeft = xDirection === 1 ? this.state.left - 1 : this.state.left + 1;
            
            this.setState({
                top: newTop,
                left: newLeft
            });
        }, 100);

        let plus = true;
        let size = 0;
        let sizeInterval = window.setInterval(() => {                     
            if(plus){ size++; }
            else{ size--; }
            if(size > 5){ plus = false; }
            if(size <= 0 ){ plus = true; }
            this.setState({
                width: size,
                height: size,
                boxShadow: "0 0 " + size + "px"  + "#FFF"
            });
        }, 500);

        this.setState({
            positionInterval: positionInterval, 
            sizeInterval: sizeInterval
        });
    }

    render(){

        console.log("I'm here");

        return(
            <div className="shooting-star" style={this.state.style}></div>
        );
    }
}

export default ShootingStar;