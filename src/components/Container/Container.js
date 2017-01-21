import React, {Component} from 'react';
import {render} from 'react-dom';
import FB from './../../firebase';

class Container extends Component {
    constructor() {
        super();
        const db = FB.database();
        this.rootRef = db.ref().child('data');
        this.state = {
            contacts: []
        }
        this._addContact = this._addContact.bind(this);
        this._parseObject = this._parseObject.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.rootRef.once('value').then((snap) => {
            this.setState({
                contacts: this._parseObject(snap.val())
            });
        });
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.rootRef.on('value', snap => {
            this.setState({
                contacts: this._parseObject(snap.val())
            });
        });
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    _parseObject(obj) {
        let contacts = [];
        contacts = Object.keys(obj).map(function(key) {
            return obj[key];
        });
        return contacts;
    }

    _addContact() {
        let key = this.rootRef.push().key,
            newContact = {
                id: key,
                username: this.refs.name.value,
                email: 'email@email.com',
                phone_number: this.refs.phonenumber.value,
                profile_picture: 'https://placehold.it/200x200'
            };
        this.rootRef.push(newContact);
    }

    render() {
        let contacts = this.state.contacts;
        return (
            <form>
                <div className="row">
                    <div className="medium-6 columns">
                        <h3>Contacts</h3>
                        {contacts.map(contact => (
                            <div key={contact.id} className="media-object stack-for-small">
                                <div className="media-object-section">
                                    <img className="thumbnail" src={contact.profile_picture}/>
                                </div>
                                <div className="media-object-section">
                                    <h5>Name: {contact.username}</h5>
                                    <h5>Phone: {contact.phone_number}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="medium-6 large-5 columns">
                        <h3>Add Contact</h3>
                        <div className="row">
                            <div className="small-3 columns">
                                <label htmlFor="middle-label" className="middle">Name:</label>
                            </div>
                            <div className="small-9 columns">
                                <input ref="name" type="text" name="username" placeholder="Enter the Name" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-3 columns">
                                <label htmlFor="middle-label" className="middle">Phone:</label>
                            </div>
                            <div className="small-9 columns">
                                <input ref="phonenumber" type="tel" name="phonenumber" placeholder="Enter the phone number" required/>
                            </div>
                        </div>
                        <a href="#" onClick={this._addContact} className="button large expanded">Add</a>
                    </div>
                </div>
            </form>
        );
    }
}

export default Container;
