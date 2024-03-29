import './ImageList.css';

import React, { Component } from 'react';

import ImageCard from './ImageCard';

export default class ImageList extends Component {
    /*constructor(props){
        super(props);
    }*/

    render() {
        const images = this.props.images.map( (image) => {
            return <ImageCard key={image.id} image={image} />
        })
        return (
            <div className="image-list">{images}</div>
        )
    }
}
