import React, { Component } from 'react'

function getLocaleTimeString(){
    return new Date().toLocaleTimeString();
}

class Clock extends Component {
    
    state = { time: getLocaleTimeString() };
    
    componentDidMount() {
        setInterval(() => {
            this.setState({time: getLocaleTimeString() })  
        }, 1000)
    }

    render() {
        return (
            <div className="time">
                {this.state.time}
            </div>
        )
    }
}
export default Clock;