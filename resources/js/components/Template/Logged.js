import React from 'react';

const Logged = ({nombre, onLogout}) => (
    <ul className="navbar-nav ml-auto">                      
        <li className="nav-item dropdown">
            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                {nombre}
            </a>

            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a className="dropdown-item">
                    Administración
                </a>
                <a className="dropdown-item"
                    onClick={onLogout}>
                    Logout
                </a>
            </div>
        </li>
    </ul>
)

export default Logged