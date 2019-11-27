import React from 'react';
import { NavLink } from 'react-router-dom';

export default class HeaderBar extends React.Component {

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="navbar-brand" href="#">Student Records</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    {localStorage.getItem('jwt') ? <React.Fragment>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/viewall" activeClassName="active">View All</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/addedit" activeClassName="active">Add Student</NavLink>
                    </li>
                    </React.Fragment> : ''}
                </ul>
                {localStorage.getItem('jwt') ? <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/login" activeClassName="active">Logout</NavLink>
                    </li>
                </ul> : <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
                    </li>
                </ul>}
                
            </div>
        </nav>
    }
}