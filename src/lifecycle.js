import React, { Component } from 'react'

export default class lifecycle extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentDidUnmount(){
        console.log("componentDidUnmount");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
    }

    getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps");
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate");
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
