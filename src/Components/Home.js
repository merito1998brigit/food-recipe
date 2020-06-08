import React, { Component } from 'react';
import Cusine from './Cusines';
import SouthIndian from './SouthIndian';
import Italian from './Italian';
import NorthIndian from './NorthIndian';
import background1 from '../assets/background1.jpg';



class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="row-container row align-items-center justify-content-center text-center" style={{
                backgroundImage: `url(${background1})`,
                backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat' }}>
                     
                            <div className="col-12 caption ">
                                <strong>
                                   <p>Brito's Recipes</p>
                                 </strong>
                             </div> 
                           
                             <div className="col-12 caption2">
                                
                                   <p>people who love to eat food are the best people  <span className="fa fa-heart fa-md"></span></p>
                            
                             </div> 
                             <div className="col-12 arrowbtn ">
                                  <span className="fa fa-angle-double-down fa-lg down"></span>
                             </div>
                          
                     
             </div>
             <div className="container-fluid">
                  <Cusine/>
             </div>
            <div className="container-fluid">
                  <SouthIndian/>
             </div>
             <div className="container-fluid">
                  <NorthIndian/>
             </div>
             <div className="container-fluid">
                  <Italian/>
             </div>
             </React.Fragment>
        );
    }
}

export default Home;