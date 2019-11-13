import React, { Component } from 'react'


import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class HomePics extends Component {
    render() {
        return (
            <div>
                pics from home pics

                <SearchBar />
                <ImageList />
            </div>
        )
    }
}
