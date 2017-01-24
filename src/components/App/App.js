import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Main from './../Main/Main';
import Login from './../Login/Login';
import Home from './../Home/Home';
import Auth from './../Login/Auth';

const requireAuth = (nextState, replaceState) => {
    if (!Auth.loggedIn()) {
        replaceState({ nextPathname: nextState.location.pathname }, '/login')
    }
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn: Auth.loggedIn()
        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Login}/>
                    <Route path="home" component={Home} onEnter={requireAuth}/>
                </Route>
            </Router>
        );
    }
}

export default App;
