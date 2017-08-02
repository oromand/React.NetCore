import * as React from "react"
import { withRouter, HashRouter } from 'react-router-dom'

import Login from "./Login"

class Header extends React.Component {
    render() {
        return (
            <div className="">
                <nav>
                    <div className="nav-wrapper blue darken-3">
                        <a href="#" className="brand-logo">Hockey personnal assistant 333</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Login/></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;