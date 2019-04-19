import React, { Component } from 'react';

export default class TableRow extends Component {

    render() {
        
        console.log(this.props)
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{this.props.data.name}</h3>
                                    <h3>{this.props.data.age}</h3>
                                    <button onClick={this.props.add}>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}