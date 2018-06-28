import React, { Component } from 'react';
import axios from 'axios';

// To formatt json: https://jsoneditoronline.org/
// url from subreddit https://www.reddit.com/r/space.json

class Apicall extends Component {
    constructor(props){
        super(props);

        // subr = subredit
        this.state = {
            posts: [],
            subr: 'space'
        }
    }

    getReddit = () => {
        axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({posts});
        });
    }

    componentWillMount(){
        this.getReddit();
    }

    render(){
        return(
            <div>
                <h1>{`/r/${this.state.subr}`}</h1>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Apicall;