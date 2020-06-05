import React from 'react';
import {CUSINE} from '../Shares/cusineType';
import { Card , CardImg,CardTitle , CardText, CardFooter,} from 'reactstrap';

function RenderMenu({dish}){
    return(
           <Card className="shadow">
                 <CardImg width="100%" height="350px" src={dish.image} alt={dish.name}/>
                 <CardFooter className="text-center">
                     <strong>
                    <p>{dish.name}</p>
                    </strong>
                 </CardFooter>
                 
           </Card>
    )
}

function Cusines(props) {
    const cusine = CUSINE;
    const menu = cusine.map((dish) =>{
        return(
            <div key={dish.id} className="col-12 col-md-5 m-3">
            <RenderMenu dish={dish} />
           </div>
        )
    })
    return (
        <div className="row d-flex justify-content-center mt-5">
            {menu}
        </div>
    );
}

export default Cusines;