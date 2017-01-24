import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Link} from 'react-router';
import style from './styles.scss';

import * as firebase from 'firebase';

class Login extends Component {
    constructor() {
        super();
        this.provider = new firebase.auth.GoogleAuthProvider();
        this._logIn = this._logIn.bind(this);
        this._logOut = this._logOut.bind(this);
    }

    _logIn() {
        firebase.auth().signInWithPopup(this.provider).then(function(result) {
            const token = result.credential.accessToken,
                user = result.user;
            localStorage.token = token
        }).catch(function(error) {
            let errorCode = error.code,
                errorMessage = error.message,
                email = error.email,
                credential = error.credential;
            console.log(error);
        });
    }

    _logOut() {
        delete localStorage.token;
        alert('Logout completed');
    }

    render() {
        return (
            <div className="row login-centered">
                <div className="medium-6 medium-centered large-4 large-centered columns">
                    <form>
                        <div className="row column log-in-form">
                            <div className="column column-block">
                                <img src="img/phonebook.png"/>
                            </div>
                            <h4 className="text-center">Login with your Google account</h4>
                            <p>
                                <a onClick={this._logIn} className="button expanded">Log In</a>
                            </p>
                            <p>
                                <a onClick={this._logOut} className="button expanded">Log Out</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
