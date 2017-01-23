import React, {Component} from 'react';
import {render} from 'react-dom';

const ContactList = (props) => (
    <div id={props.contact.id} className="media-object stack-for-small">
        <div className="media-object-section">
            <img className="thumbnail" src={props.contact.profile_picture}/>
        </div>
        <div className="media-object-section">
            <h5>Name: {props.contact.username}</h5>
            <h5>Phone: {props.contact.phone_number}</h5>
        </div>
    </div>
);

export default ContactList;
