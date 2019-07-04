import * as React from "react";
import { NavLink } from "react-router-dom";
import "../../index.d";
import logo from "../../images/logo.png";

function Header() {
    return (
        <header className="row bg-light">
            <nav className="col-md-12 navbar navbar-expand-lg navbar-light">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} width="40px" height="30px" alt="Logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                className="nav-link"
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/courses"
                                className="nav-link"
                                activeClassName="active"
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className="nav-link"
                                activeClassName="active"
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;
