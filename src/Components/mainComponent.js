import React, { Component } from 'react';
import Header from './Header';
import {CUSINE} from '../Shares/cusineType';
import {SOUTHDISH} from '../Shares/southIndianRecipe';
import SouthIndian from './SouthIndian';
import {NORTHDISH} from '../Shares/northIndianRecipe';
import NorthIndian from './NorthIndian';
import {ITALIAN} from '../Shares/ItalianRecipe';
import Italian from './Italian';
import Home from './Home'; 
import Footer from './Footer';
import {Switch, Route ,Redirect} from 'react-router-dom';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            Cusineitem:CUSINE,
            southdish:SOUTHDISH,
            northdish:NORTHDISH,
            italiandish:ITALIAN
        }
    }
    
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                <Route path="/home" component={() =><Home cusine={this.state.Cusineitem}/> }/>
                <Route path="/italian" component={() =><Italian italianrecipe={this.state.italiandish}/> }/>
                <Route path="/southindian" component={() =><SouthIndian southrecipe={this.state.southdish}/> }/>
                <Route path="/northindian" component={() =><NorthIndian northrecipe={this.state.northdish}/> }/>
                <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default MainComponent;