import React, { Component } from 'react';

export default class ClickIncrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            isToggleOn: [],
            name: [],
            count: 0
        };
    }

    handleClick = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });

    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    reset = () => {
        this.setState({ count: null })
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.name.map((val, i) =>
                        <div key={i}><h3 style={{ color: "green" }}>{val}</h3></div>
                    )
                }
                {
                    this.state.isToggleOn.map((val, i) =>
                        <div key={i}>{val}</div>
                    )
                }
                <h3>Count{this.state.count}</h3>
                <button onClick={this.increment}> increment</button>
                <button onClick={this.decrement}> decrement</button>
                <button onClick={this.reset}> reset</button>
            </React.Fragment>

        )
    }
}