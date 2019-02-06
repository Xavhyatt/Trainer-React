import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Account from './Account';
import './pricing.css';

class Nav extends Component{
    render(){
        return(
            <Router>
            <div  class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">

            <nav class="my-2 my-md-0 mr-md-3">
                <Link to="/" class="p-2 text-blue font-weight-bold" href="#">Tracker</Link>
                <Link to="/" class="p-2 text-blue font-weight-bold" href="#" > Dashboard </Link>
                <Link to="/" class="p-2 text-blue font-weight-bold" href="#" > Trainers </Link>
                <Link to="/" class="p-2 text-blue font-weight-bold" href="#" > Resource Library </Link>
            </nav>
            
            
            <Account />
        </div>
        </Router>
        )
    }
}

export default Nav;
