import React, { Component } from 'react'


import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';

import UserHeader from './UserHeader';

class PostList extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }
    renderList(){
        const pStyle = {
            fontSize: '12px',
            textAlign: 'left',
            border: '1px solid grey',
            margin : '1px 3px',
            padding: '3px'
        }

        return this.props.posts.map(post => {
            return (
                <div className="item" style={pStyle} key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>                    
                    
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divied list">
                { this.renderList() }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)