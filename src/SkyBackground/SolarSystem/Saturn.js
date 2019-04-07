import React from 'react';

import  './Planet.css';

function Saturn(props){
    return(
        <div id="saturn" className="planet">
            <div id="saturn-internal-ring" className="saturn-rings"></div>
            <div id="saturn-external-ring" className="saturn-rings"></div>
        </div>
    );
}

export default Saturn;
