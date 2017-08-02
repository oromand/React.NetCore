import React from 'react';
import { BrowserRouter as Router, Route, Switch, hashHistory } from 'react-router-dom'

import './App.css';

import Body from "./components/Body"
import Content from "./components/Content"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListOffers from "./components/ListOffers"
import DetailOffer from "./components/DetailOffer"

class App extends React.Component {

    render() {
        return (
            <Router history={hashHistory}>
                <div>
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={ListOffers} />
                        <Route path="/detail" component={DetailOffer} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
