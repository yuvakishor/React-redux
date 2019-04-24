import React, { Component } from 'react';
import CardJson from '../components/cardjson'

export default class ContactCard extends Component {

    render() {
        let sample = CardJson
        console.log(sample)
        return (
            <React.Fragment>
                <div className="row">
                    {
                        sample.map((val, i) =>
                            (
                                <div className="col-md-3 mt-5" key={i}>
                                    <div className="card">
                                        <img src={require(`../asserts/${val.imgUrl}`)} alt="logo" />
                                        <div className="card-body">
                                            <h3 style={{ color: "green" }}>{val.name}</h3>
                                            <h5>Email:{val.email}</h5>
                                            <p><strong>phone:</strong>{val.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </React.Fragment>
        )
    }
}
