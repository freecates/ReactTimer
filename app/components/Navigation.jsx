const React = require('react');
const {Link, IndexLink} = require('react-router');

var Nav = () => {
    
    return (
        <nav>
            <div className="top-bar" id="timer-menu">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                        <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="https://github.com/freecates" target="_blank">freecates</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

module.exports = Nav;
