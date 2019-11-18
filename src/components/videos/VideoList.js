import React, { Component } from 'react'

import VideoItem from './VideoItems';

class VideoList extends Component {    
    
    render() {
        const videos = this.props.videos;
        const onVideoSelect = this.props.onVideoSelect;

        const renderedList = videos.map((video) => {
            return (
                <div className="container">
                    <VideoItem 
                        key={video.id.videoId} 
                        onVideoSelect={onVideoSelect} 
                        video={video} 
                    />
                </div>
            )
        })
        return (
            <div className="ui relaxed divided list">
                { renderedList }
            </div>
        )
    }
}

export default VideoList;