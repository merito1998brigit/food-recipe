import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardTitle,CardText, Button } from 'reactstrap';
function RenderItem({items}){
    return(
      
           <Card className="shadow2">
                 <CardImg className="shadow" width="100%" height="280px" src={items.image} alt={items.name}/>
                      <CardBody>
                             <CardTitle>
                                   {items.name}
                             </CardTitle>
                              <CardText>
                                    {items.description}
                              </CardText>
                              <Button>Get Recipe</Button>
                      </CardBody>
            </Card>
            
    )
}
class Chinese extends Component {
    constructor(props) {
        super(props);
       this.state={} 
    }
    
    render() {
        
        const recipes = this.props.chineserecipe.map((items) =>{
            return(
                <div key={items.id} className="col-12 col-md-5  cards">
                <RenderItem items={items} />
               </div>
            )
        })
        return (
            
            <div className="row d-flex justify-content-center mt-5">
                {recipes}
            </div>
        );
    }
}

export default Chinese;