import * as React from 'react';
//import * as { BrowserRouter as Router, Route, Switch, hashHistory } from 'react-router-dom'

import Body from "./components/Body"
import Content from "./components/Content"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListOffers from "./components/ListOffers"
import DetailOffer from "./components/DetailOffer"

interface S {
    IsLoggedIn: boolean
}
interface P {}

class App extends React.Component<P,S> {
    render() {
        return ( 
            //<Router history={hashHistory}>
                <div>
                    <Header />
                    <div className="container">
                    </div>
                    <Footer />
                </div>
            //</Router>
        );
    }
}

export default App;
