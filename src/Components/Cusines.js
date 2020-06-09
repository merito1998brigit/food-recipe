import React from 'react';
import { Card , CardImg, CardFooter} from 'reactstrap';
import {Link } from 'react-router-dom';

function RenderMenu({dish}){
    return(
        <Link to={`/cusine/${dish.name}`}>
           <Card >
                 <CardImg className="shadow" width="100%" height="280px" src={dish.image} alt={dish.name}/>
                  <CardFooter className="cardname text-center text-white">
                          <strong><p>{dish.name}</p></strong>
                  </CardFooter>
            </Card>
        </Link>    
    )
}

function Cusines({cusine}) {

    const menu = cusine.map((dish) =>{
        return(
            <div key={dish.id} className="col-12 col-md-5  cards">
            <RenderMenu dish={dish} />
           </div>
        )
    })
    return (
        <div className="row row-container2 justify-content-center mt-5">
            {menu}
        </div>
    );
}

export default Cusines;