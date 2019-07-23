import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';

interface MainMenu {
    isHamburgerOpen: boolean;
}

const MainMenu: React.FC = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
    const handleOnClick = () => setIsHamburgerOpen(!isHamburgerOpen);
    return (
        <nav
            className="navbar is-dark"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <NavLink
                    exact
                    to="/"
                    className="navbar-item"
                    activeClassName="is-active"
                >
                    <FontAwesomeIcon icon={faBalanceScale} />
                </NavLink>
                <button
                    onClick={() => handleOnClick}
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="main-menu-navbar"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>
            </div>
            <div
                id="main-menu-navbar"
                className={classnames('navbar-menu', {
                    'is-active': isHamburgerOpen,
                })}
            >
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <NavLink
                            exact
                            to="/"
                            className="navbar-link"
                            activeClassName="is-active"
                        >
                            Budgets
                        </NavLink>
                        <div className="navbar-dropdown is-boxed">
                            <NavLink
                                exact
                                to="/cbudget"
                                className="navbar-item"
                                activeClassName="is-active"
                            >
                                Create
                            </NavLink>
                            <NavLink
                                exact
                                to="/budgets/edit"
                                className="navbar-item"
                                activeClassName="is-active"
                            >
                                Edit
                            </NavLink>
                            <NavLink
                                exact
                                to="/reports"
                                className="navbar-item"
                                activeClassName="is-active"
                            >
                                Export
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <NavLink
                        exact
                        to="/login"
                        className="navbar-item"
                        activeClassName="is-active"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        exact
                        to="/register"
                        className="navbar-item"
                        activeClassName="is-active"
                    >
                        Register
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
export default MainMenu;
