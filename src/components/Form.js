import React,{Component} from 'react';

class Form extends Component{
    constructor(prop){
        super()
         this.state={
             username:'',
             comment:'',
             topic:''

         }
    }
    handleUserChange=(event)=>{
        this.setState({username:event.target.value})
    }
    handleCommentChange=(event)=>{
        this.setState({comment:event.target.value})
    }
    handleTopicChange=(event)=>{
        this.setState({topic:event.target.value})
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
          event.preventDefault()
    }
    render(){
        return(
            <React.Fragment>
               <form onSubmit={this.handleSubmit}>
                   <div>
                       <label >Username</label>
                       <input type="text" value={this.state.username} onChange={this.handleUserChange}></input>
                   </div>
                   <div>
                       <label>commemts</label>
                       <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                   </div>
                   <div>
                       <label>Topics</label>
                       <select value={this.state.topic} onChange={this.handleTopicChange}>
                           <option value="react">React</option>
                           <option value="angularjs">Angular</option>
                           <option value="vue">Vue</option>
                       </select>
                   </div>
                   <button type="submit">Submit</button>
               </form>
            </React.Fragment>
        )
    }
}
export default Form;