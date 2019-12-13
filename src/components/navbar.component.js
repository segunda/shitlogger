import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
                <Link to="/" className="navbar-brand">Shit Logger</Link>
                <div className=" navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                </div>
            </nav>

        );
    }
}