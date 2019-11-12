import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText (){
    return 'Click on me!';
}

const FunComp = () => {
    const btnText = {"text" : 'Button Text'}
    const style = {
        backgroundColor: 'blue', 
        color: 'white'
    }
    const labelText = "Enter Name:";
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input type="text" id="name" />
            <button style = {style}
            >
            {btnText.text}
            </button>
        </div>
    )
}

export default FunComp;