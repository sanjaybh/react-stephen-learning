import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    //console.log(props.song);
    if(!song){
        return <div>Select a song...</div>
    }
    return (
        <div className="">
            <h3>Details for:</h3>

            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    )
}

const mapStatetoProps = (state) =>{
    return { song: state.selectedSong }
}
export default connect(mapStatetoProps)(SongDetail);