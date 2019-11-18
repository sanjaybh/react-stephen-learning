import React, { Component } from 'react'
import './VideoItem.css';

export default class VideoItems extends Component {
    render() {
        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;

        return (
            <div className="video-item item" 
                onClick={ () => onVideoSelect(video) }>
                
                <img className="ui image" 
                    src={video.snippet.thumbnails.medium.url} 
                    alt={video.snippet.title} />
                
                <div className="content spacer">
                    <div className="header">
                        {video.snippet.title} 
                    </div>
                </div>
            </div>
        )
    }
}
