import React, { Component } from 'react';
import background1 from '../assets/background1.jpg';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';



class Home extends Component {
     constructor(props) {
          super(props);
          this.state={}
     }
     
    render() {
        return (
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
                                 <Link to={`/cusine`}>
                                 <Button className="bg-success">
                                Let's Explore
                                </Button>
                                </Link>
                             </div>
                          
                     
             </div>
        
         
             
        );
    }
}

export default Home;