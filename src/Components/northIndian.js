import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardTitle,CardText, Button,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';
function RenderItem({items}){
    return(
        
           <Card className="shadow2">
                 <CardImg className="shadow"  width="100%" height="280px" src={items.image} alt={items.name}/>
                      <CardBody>
                             <CardTitle>
                                   {items.name}
                             </CardTitle>
                              <CardText>
                                    {items.description}
                              </CardText>
                              <Link to={`/NorthIndian/${items.id}`}>
                              <Button>Get Recipe</Button>
                              </Link>
                      </CardBody>
            </Card>
           
    )
}
class NorthIndian extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const recipes = this.props.northrecipe.map((items) =>{
            return(
                <div key={items.id} className="col-12 col-md-5  cards">
                <RenderItem items={items} />
               </div>
            )
        })
        return (
            <div className="container-fluid">
                <div className="row pt-5">
                     <Breadcrumb className="position-fixed breadcrumb">
                       <BreadcrumbItem><Link to='/cusine'>Cusines</Link></BreadcrumbItem>
                       <BreadcrumbItem active>North Indian</BreadcrumbItem>
                    </Breadcrumb>
              </div>  
            <div className="row  justify-content-center ">
                {recipes}
            </div>
            </div>
        );
    }
}

export default NorthIndian;