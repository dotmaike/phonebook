import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Link, withRouter} from 'react-router';
import Auth from './../../../Login/Auth';
import './styles.scss';

class TopBarRight extends Component {
    constructor(props) {
        super(props);
        this._logOut = this._logOut.bind(this);
    }

    _logOut() {
        Auth.logout();
        const {router} = this.props;
        router.replace('/');
    }

    render() {
        return (
            <div className="top-bar-right">
                <ul className="menu">
                    <li>
                        <div className="media-object">
                            <div className="media-object-section">
                                <h4>Welcome!</h4>
                                <p>{localStorage.user}</p>
                            </div>
                            <div className="media-object-section">
                                <div className="thumbnail">
                                    <img src={localStorage.photo}/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="alert button" onClick={this._logOut}>Logout</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(TopBarRight);
