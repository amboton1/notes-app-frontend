import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    const { onLogout } = props;

    return (
        <div className="nav-cnt">
            <nav className="navbar bg-primary">
                <h1>
                    {props.title}
                </h1>
                <ul>
                    <li>
                        <button className="blue" onClick={onLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

Navbar.defaultProps = {
    title: 'Notes'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;