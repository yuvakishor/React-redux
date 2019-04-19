import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Refs extends Component{
    constructor(){
        super()
        this.state={
            data:"",
            add:[]
        }
    }
    updateState=(event)=>{
        this.setState({data:event.target.value})
    }
    onClear=()=>{
        this.setState({data:""})
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <input value={this.state.data} onChange={this.updateState} ref = "myInput" />
                    <button onClick={this.onClear}>Clear</button>
                </div>
            </React.Fragment>
        )
    }
}