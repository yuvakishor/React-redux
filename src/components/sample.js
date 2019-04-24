import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropType from 'prop-types'
import { fetchPosts } from '../actions/postActions'


class Sample extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const itemsList = this.props.posts.map(sample => (
            <div><h2>{sample.id}</h2></div>
        ))
        return (
            <div>
               {itemsList}
            </div>
        )
    }
}
Sample.PropType = {
    fetchPosts: PropType.func.isRequired,
    posts: PropType.array.isRequired,
}
const sample = (val) => ({
    posts: val.posts.items
})
export default connect(sample, { fetchPosts })(Sample);