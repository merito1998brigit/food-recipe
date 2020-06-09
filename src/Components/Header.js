import React, { Component } from 'react';
import {Nav,NavItem,Navbar,NavbarBrand, Collapse,} from 'reactstrap';
import {NavLink} from 'react-router-dom';
 
class Header extends Component{
    constructor(props) {
        super(props);
        this.state={
            isNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this);
    }
    
  toggleNav(){
      this.setState({
          isNavOpen: !this.state.isNavOpen,
      })
  }
    render(){
        return(
            <Navbar dark  expand="md" className="fixed-top">
                  <div className="container">
                  <div className="fa fa-bars fa-lg 	d-block d-sm-none" onClick={this.toggleNav}/> 
                           <NavbarBrand  className="mr-auto navbar-brand d-none d-sm-block" href="/">
                                   Brito's Recipes
                           </NavbarBrand>
                       <Collapse isOpen={this.state.isNavOpen} navbar  className="justify-content-end">   
                           <Nav navbar>
                                        <NavItem className="mr-2">
                                            <NavLink  className="nav-link" to='/home'>
                                                 Home
                                            </NavLink>
                                        </NavItem>    
                                        <NavItem className="mr-2">
                                            <NavLink className="nav-link" to='/Aboutus'>
                                                About us
                                            </NavLink>
                                        </NavItem>     
                                        <NavItem className="mr-2">     
                                            <NavLink  className="nav-link" to='/cusine'>
                                            Cusines
                                            </NavLink>
                                        </NavItem> 
                                        <NavItem>    
                                            <NavLink className="nav-link" to='/addrecipes'>
                                                Add Recipes
                                            </NavLink>
                                        </NavItem>
                                </Nav>
                        </Collapse>       
                        <NavbarBrand  className="ml-auto navbar-brand 	d-block d-sm-none" href="/">
                                   Brito's Recipes
                           </NavbarBrand> 
                  </div>
            </Navbar>
        )
    }
}
export default Header;