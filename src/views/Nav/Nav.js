import React from "react";
import './Nav.scss'
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todos
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    Users
                </NavLink>
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/about">About</Link> */}
                {/* the link ko reload lai trang */}
                {/* <a className="active" href="/">Home</a>
                <a href="/todo">Todo</a>
                <a href="/about">About</a> */}
            </div>
        )
    }
}

export default Nav;