import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropType from 'prop-types'
import { createPost } from '../actions/postActions'


class PostForms extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            body: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body
        }
        this.props.createPost(post)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h2>PostForm</h2>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Body:</label>
                        <br />
                        <textarea name="body" value={this.state.body} onChange={this.onChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
PostForms.PropType={
    createPost:PropType.func.isRequired
}
export default connect(null,{createPost})(PostForms);
