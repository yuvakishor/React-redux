import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from '../components/Form'
import ClickIncrement from '../components/ClickIncrement'
import HOC from '../components/HOC'
import ContactCard from '../components/ContactCard'
import Refs from '../components/Refs'
import Get from '../components/Get'
import Posts from '../components/posts'
import Sample from '../components/sample'
import Hooks from '../components/Hooks'
import Register from '../components/Register'

export default class Routing extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact={true} path="/" component={Form} />
                        <Route path="/ClickIncrement" component={ClickIncrement} />
                        <Route path="/HOC" component={HOC} />
                        <Route path="/ContactCard" component={ContactCard} />
                        <Route path="/Refs" component={Refs} />
                        <Route path="/Get" component={Get} />
                        <Route path="/Posts" component={Posts} />
                        <Route path="/Sample" component={Sample} />
                        <Route path="/Hooks" component={Hooks} />
                        <Route path="/Register" component={Register} />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}