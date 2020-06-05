import React, { Component } from 'react';
import Cusine from './Cusines';
import { Card, CardImg } from 'reactstrap';
import background1 from '../assets/background1.jpg';
import southindian from '../assets/southindian.jpg';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="row-container row align-items-center justify-content-center mt-5" style={{
                backgroundImage: `url(${background1})`,
                backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat' }}>
                     <div className="row align-items-center  text-center">
                            <div className="col-12 caption">
                                <strong>
                                   <p>Brito's Recipes</p>
                                 </strong>
                             </div> 
                             <div className="col-12 caption2">
                                
                                   <p>people who love to eat food are the best people  <span className="fa fa-heart fa-md"></span></p>
                            
                             </div> 
                             
                          
                     </div>
             </div>
             <div className="container-fluid">
                  <Cusine/>
             </div>
             </React.Fragment>
        );
    }
}

export default Home;