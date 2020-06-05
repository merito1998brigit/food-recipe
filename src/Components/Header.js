import React, { Component } from 'react';
import {Nav,NavItem,NavLink,Navbar,NavbarBrand,NavbarToggler} from 'reactstrap';
 
class Header extends Component{
 
    render(){
        return(
            <Navbar dark  expand="md" className="fixed-top">
                  <div className="container">
                           <NavbarBrand  className="mr-auto navbar-brand" href="/">
                                   Brito's Recipes
                           </NavbarBrand>
                           <Nav navbar>
                                        <NavItem className="mr-2">
                                            <NavLink className="nav-link" to="/home">
                                                 Home
                                            </NavLink>
                                        </NavItem>    
                                        <NavItem className="mr-2">
                                            <NavLink className="nav-link" to="/Aboutus">
                                                About us
                                            </NavLink>
                                        </NavItem>     
                                        <NavItem className="mr-2">    
                                            <NavLink className="nav-link" to="/menu">
                                                Recipes
                                            </NavLink>
                                        </NavItem> 
                                        <NavItem>    
                                            <NavLink className="nav-link" to="/contactus">
                                                Contact Us
                                            </NavLink>
                                        </NavItem>
                                </Nav>
                  </div>
            </Navbar>
        )
    }
}
export default Header;