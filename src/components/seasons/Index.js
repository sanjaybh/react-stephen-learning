import React, { Component } from 'react'

import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';

class Index extends Component {
    state = {lat : null, lon: null, errorMsg: ''};

    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({'lat':position.coords.latitude,'lon':position.coords.longitude}),
            err => this.setState({'errorMsg': err.message})  
        )
    }
    
    renderContent(){
        if(!this.state.errorMsg && this.state.lat){
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} lon={this.state.lon}  />               
                </div>
            )
        }

        if(this.state.errorMsg && !this.state.lat){
            return (
                <div>Error : {this.state.errorMsg}</div>
            )
        }

        return (
           <Spinner message="Please accept location request." />          
        )
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}
export default Index;