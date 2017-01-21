import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import * as firebase from "firebase";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './scss/main.scss';
import App from './components/App/App';

const config = {
    apiKey: "AIzaSyBf-qpqK2vHsyGcQ8kEh2j6f8M6fRAxwWU",
    authDomain: "phonebook-45c68.firebaseapp.com",
    databaseURL: "https://phonebook-45c68.firebaseio.com",
    storageBucket: "phonebook-45c68.appspot.com",
    messagingSenderId: "535079705418"
};
firebase.initializeApp(config);

render(<App/>, document.getElementById('root'));
