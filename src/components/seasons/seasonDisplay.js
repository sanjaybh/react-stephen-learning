import './seasonDisplay.css';

import React, { Component } from 'react'

//Helper functions
const seasonConfig = {
    summer: {
        text: 'let\'s hit the beach', 
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly', 
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}


//React functional component
const SeasonDisplay = (props) => {
    const currMonth = new Date().getMonth();
    const season = getSeason(props.lat, currMonth);

    const {text, iconName} = seasonConfig[season];
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left icon massive ${iconName}`} />
            <h1>{text}</h1>
            <i className={`icon-right icon massive ${iconName}`} />
        </div>
    )
};

export default SeasonDisplay;