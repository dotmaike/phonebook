import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Link, withRouter} from 'react-router';
import style from './styles.scss';
import Auth from './Auth';

class Login extends Component {
    constructor(props) {
        super(props);
        this._logIn = this._logIn.bind(this);
    }

    _logIn() {
        const {router} = this.props;
        let promise = Auth.login();
        promise.then(function(result) {
            localStorage.token = result.credential.accessToken;
            localStorage.user = result.user.displayName;
            localStorage.photo = result.user.photoURL;
            localStorage.uid = result.user.uid;
            router.replace('/home');
            console.log(result);
        }).catch(function(error) {
            const errorCode = error.code,
                errorMessage = error.message,
                email = error.email,
                credential = error.credential;
            console.log(error);
        });
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
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
