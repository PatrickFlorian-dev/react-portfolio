/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Root.scss';

import NavbarLayout from '../Layout/NavbarLayout'

import About from './About';
import Home from './Home';
import NotFound from './NotFound';

class Root extends Component {
    
    constructor(props) {
        super(props);
    }

    state = { 

    }

    render() { 
        return ( 
            <React.Fragment>
                <NavbarLayout/>
                <Switch>
                    <Route component={Home} exact path="/" />
                    <Route component={About} path="/about" />
                    <Route component={NotFound} path='*' exact />
                </Switch>
            </React.Fragment>
         );
    }
}

export default Root;