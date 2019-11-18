import React, { Component } from 'react'

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

import youtube from './apis/youtube';

class AppVideo extends Component {
    state = { videos: [], selectedVideo : null };

    componentDidMount(){
        this.onTermSubmit('buildings');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params : {
                q: term,
                //below params should come from youtube component
                part:'snippet',
                maxResults: 5,
                key: 'AIzaSyDyQq-dcSy12sBXxCCxVmnswhcYb-LQZSk'
            }
        })

        this.setState({ 
            videos : response.data.items,
            selectedVideo: response.data.items[0]
        });
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} />
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default AppVideo;
