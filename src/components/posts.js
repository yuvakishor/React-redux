import React, { Component } from 'react'
import Postforms from '../components/postforms'
import PropType from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps){
       if(nextProps.newPost){
           this.props.posts.unshift(nextProps.newPost)
       }
    }

    render() {
        return (
            <div>
                <Postforms />
                <h3>posts</h3>
                {this.props.posts.map(post => (
                    <div key={post.id}>
                        <h3 style={{ color: "green" }}>{post.title}</h3>
                        <h4>{post.body}</h4>
                    </div>
                ))}
            </div>
        )
    }
}
Posts.PropType = {
    fetchPosts: PropType.func.isRequired,
    posts: PropType.array.isRequired,
    newPost:PropType.object
}
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost:state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(Posts);
