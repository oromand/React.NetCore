import * as React from 'react'; 

interface S {
    isLoggedIn: boolean;
}

interface P {

}
 
  export default class Login extends React.Component<P, S> {


        render() {
            let menu = null; 
                menu = <div><span>Mr EsX</span><span className="logout">Logout</span></div>;

            return( 
                <div>
                    {menu} 
                </div> 
 
            );
        }
    }
