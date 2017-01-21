import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App/App';
import './scss/main.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
    <App/>, document.getElementById('root'));
