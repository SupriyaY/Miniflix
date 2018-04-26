//navigation that all page in the app will share
import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';


class Nav extends Component {


    render() {

        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link className="nav-brand" to="/">Miniflix</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">All Videos</Link>
                    </li>
                    <li>
                        {
                            (isLoggedIn()) ? <Link to="/upload">Upload Vidoes</Link> : ''
                        }
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>

                        {
                            (isLoggedIn()) ? (button)

    }
                    </li>
                </ul>
            </nav>
        );

    }
}

export default Nav;