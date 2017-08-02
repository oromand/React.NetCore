import React from 'react'; 
 
    class Login extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                isLoggedIn : false,

            };
        }

        render() {
            const isLoggedIn = this.state.isLoggedIn;
            let menu = null;
            if(!isLoggedIn) {
                menu = <div><span>Mr X</span><span className="logout">Logout</span></div>;
            } else {
                menu = <span>Login</span>;
            }

            return( 
                <div>
                    {menu}
                </div> 
 
            );
        }
    }
export default Login;