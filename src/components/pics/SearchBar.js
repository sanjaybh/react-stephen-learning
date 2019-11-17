import React, { Component } from 'react'



class SearchBar extends Component {
    
    constructor(props){
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        //this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    state = { term : ''}

    onInputChange(e){ //not in use
        this.setState({'term': e.target.value})
    }

    //Either bind as in constructor or use arrow funtion
    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            name="inputtext" 
                            type="text" 
                            placeholder="Input Image type" 

                            //Uncontrolled
                            //onChange={this.onInputChange}

                            //Controlled
                            value={this.state.term}
                            onChange={ (e) => this.setState({term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;