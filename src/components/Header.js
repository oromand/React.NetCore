import React from "react"
import { Link } from 'react-router-dom'

import Login from "./Login"

class Header extends React.Component {
    render() {
        return (
            <div className="">
                <nav>
                    <div className="nav-wrapper blue darken-3">
                        <a href="#" className="brand-logo">Hockey personnal assistant</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">List</Link></li>
                            <li><Link to="/detail">Detail</Link></li>
                            <li><Login/></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;