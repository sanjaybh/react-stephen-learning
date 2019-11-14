import React, { Component } from 'react';

export default class ImageList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.images);
        const img = this.props.images.map( (item) => {
            return <img key={item.id} src={item.urls.regular} height="100" width='100' alt="Image" />
        })
        return (
            <div>
                {img}
            </div>
        )
    }
}
