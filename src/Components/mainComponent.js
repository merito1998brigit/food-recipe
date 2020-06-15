import React, { Component } from 'react';
import Header from './Header';
import  Cusines    from './Cusines';
import {CUSINE} from '../Shares/cusineType';
import {SOUTHDISH} from '../Shares/southIndianRecipe';
import SouthIndian from './SouthIndian';
import {NORTHDISH} from '../Shares/northIndianRecipe';
import NorthIndian from './NorthIndian';
import {ITALIAN} from '../Shares/ItalianRecipe';
import Italian from './Italian';
import Chinese from './Chinese';
import {CHINESE} from '../Shares/ChineseRecipe';
import Southdish from  './Southdish';
import Northdish from './Northdish';
import Chinesedish from './Chinesedish';
import Italiandish from './Italiandish';
import Home from './Home'; 
import Footer from './Footer';
import {Switch, Route ,Redirect, Link} from 'react-router-dom';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            Cusineitem:CUSINE,
            southdish:SOUTHDISH,
            northdish:NORTHDISH,
            italiandish:ITALIAN,
            chinesedish:CHINESE,
        }
    }
    
    render() {
        const ItalianRecipes=({match})=>{
            return(
                <Italiandish recipe={this.state.italiandish.filter((recipes)=>recipes.id ===  parseInt(match.params.dishId,10))[0]}/>
            )
       }
        const chineseRecipes=({match})=>{
            return(
                <Chinesedish recipe={this.state.chinesedish.filter((recipes)=>recipes.id ===  parseInt(match.params.dishId,10))[0]}/>
            )
       }

        const norththRecipes=({match})=>{
            return(
                <Northdish recipe={this.state.northdish.filter((recipes)=>recipes.id ===  parseInt(match.params.dishId,10))[0]}/>
            )
       }
        const southRecipes=({match})=>{
             return(
                 <Southdish recipe={this.state.southdish.filter((recipes)=>recipes.id ===  parseInt(match.params.dishId,10))[0]}/>
             )
        }
        const RecipeList= ({match}) =>{
            if(match.params.dishname === "SouthIndian"){
                return (
                    <div className="container">
                    <SouthIndian southrecipe={this.state.southdish}/>
                    </div>
                ) 
            }
            else if(match.params.dishname === 'NorthIndian') {
                  return (
                    <div className="container">
                    <NorthIndian northrecipe={this.state.northdish}/>
                    </div>
                  ) 
            }
            else if(match.params.dishname === 'Italian'){
                return(
                    <div className="container">
                    <Italian italianrecipe={this.state.italiandish}/>
                    </div>
                )
            }
            else{
                return(
                    <div className="container">
                    <Chinese chineserecipe={this.state.chinesedish}/>
                    </div>
                ) 
            }
        }
        return (
            
            <div>
                <Header/>
                <Switch>
                <Route path="/home" component={Home}/>
                <Route exact path="/cusine" component={() =><Cusines cusine={this.state.Cusineitem}/> }/>
                <Route path="/cusine/:dishname" component={RecipeList}/>
                <Route path="/SouthIndian/:dishId" component={southRecipes}/>
                <Route path="/NorthIndian/:dishId" component={norththRecipes}/>
                <Route path="/Chinese/:dishId" component={chineseRecipes}/>
                <Route path="/Italian/:dishId" component={ItalianRecipes}/>
                <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default MainComponent;