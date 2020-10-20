import React from 'react';
import './../App.css';
import './../null.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;