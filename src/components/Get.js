import React, { Component } from 'react';
import Axios from 'axios';

export default class Get extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({ posts: res.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: "NO DATA FOUND!" })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <React.Fragment>
                <h2>Get the data in API</h2>
                {  posts.length?
                    posts.map((data, i) => (
                        <div key={i}>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="border-bottom">
                                            <h3 style={{ color: "green" }}>{data.id}</h3>
                                        </div>
                                        <h5>{data.title}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    ):<div style={{ color: "red" }}>{errorMsg}</div>
                }
               
            </React.Fragment>
        )
    }
}