import React from 'react';

const MainMenu: React.FC = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                        height="28"
                    />
                </a>
                <a
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="main-menu-navbar"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>

            <div id="main-menu-navbar" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">Home</a>
                    <a className="navbar-item">Documentation</a>
                </div>
            </div>
        </nav>
    );
};
export default MainMenu;
