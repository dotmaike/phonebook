import React, {Component} from 'react';
import {render} from 'react-dom';

const TopBarLeft = () => (
    <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu="" role="menubar" data-dropdownmenu="13amgy-dropdownmenu">
            <li className="menu-text" role="menuitem" tabIndex="0">Phonebook</li>
            <li role="menuitem" tabIndex="0">
                <a href="#" tabIndex="-1">Add</a>
            </li>
            <li role="menuitem" tabIndex="0">
                <a href="#" tabIndex="-1">Edit</a>
            </li>
            <li role="menuitem" tabIndex="0">
                <a href="#" tabIndex="-1">Remove</a>
            </li>
        </ul>
    </div>
);

export default TopBarLeft;
