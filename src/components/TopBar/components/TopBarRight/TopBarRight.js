import React, {Component} from 'react';
import {render} from 'react-dom';

const TopBarRight = () => (
    <div className="top-bar-right">
        <ul className="menu">
            <li><input type="search" placeholder="Search"/></li>
            <li><button type="button" className="button">Search</button></li>
        </ul>
    </div>
);

export default TopBarRight;
