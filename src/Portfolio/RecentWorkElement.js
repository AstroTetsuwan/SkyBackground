import React from 'react';

//hover make recent-work-element-text-container -> visible
function RecentWorkElement(props){
    return(
        <div className="recent-work-element">
            <img src={props.img} alt={props.title} className="recent-work-element-img"/>
            
            <div className="recent-work-element-text-container">            
                <h3 className="recent-work-element-title">{props.title}</h3>
                <p className="recent-work-element-p">{props.comment}</p>
                <a href={props.link}>Visit...</a>
            </div>
        </div>
    );
}

export default RecentWorkElement;