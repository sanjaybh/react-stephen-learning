import React, { Component } from 'react'

import SeasonDisplay from './seasonDisplay';

class Index extends Component {  
    // eslint-disable-next-line no-useless-constructor
    /*constructor(props){
        super(props);
    }*/

    state = {lat : null, lon: null, errorMsg: ''};

    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({'lat':position.coords.latitude,'lon':position.coords.longitude}),
            err => this.setState({'errorMsg': err.message})  
        )
    }
    
    render() {
        if(!this.state.errorMsg && this.state.lat){
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />               
                </div>
            )
        }

        if(this.state.errorMsg && !this.state.lat){
            return (
                <div>
                    Error : {this.state.errorMsg}
                </div>
            )
        }

        return <div>Loading...</div>

    }
}
export default Index;