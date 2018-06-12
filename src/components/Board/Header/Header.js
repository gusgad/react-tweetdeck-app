import React from 'react';
import './Header.css';
import twitterLogo from '../../../assets/twitter.svg';

const Header = () => (
    <div className="Header">
        <a className="Header-logo" href="/">
            <img src={twitterLogo} alt="logo" />
            <h1>TweetDeck</h1>
        </a>
    </div>
);

export default Header;