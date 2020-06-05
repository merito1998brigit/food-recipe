import React, { Component } from 'react';
import background1 from '../assets/background1.jpg';
import '../styles/home.css';

class Home extends Component {
    render() {
        return (
            
            <div className="row-container " style={{
                backgroundImage: `url(${background1})`,
                backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
                 
            }}>
                <div className="row"></div>
                <div className="row  justify-content-center">
                         <div className="col-sm-5 d-flex justify-content-center align-items-center caption">
                                 <strong><p>Welcome to Brito's Recipes</p></strong> 
                         </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-sm-5 d-flex justify-content-center align-items-center caption2">
                                 <p>People who love to eat are always the best people</p>
                         </div>
                </div>
               
                      
                
                  
            </div>
        
        );
    }
}

export default Home;