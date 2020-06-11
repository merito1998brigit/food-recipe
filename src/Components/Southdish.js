import React from 'react';
import {SOUTHDISH} from '../Shares/southIndianRecipe';
function RenderDetails({details}){

   return(
   <React.Fragment>   
         <div className="container pb-4">
               <div className="row justify-content-center ">
                   <di className="col-12 d-flex justify-content-center">
                           <img src={details.image} width="400px" height="400px"/>
                   </di>
                 <div className="row">
                        <div className="col-12">
                            <h3>{details.name}</h3>
                        </div>
                 </div>
                 <div className="row">
                        <div className="col-12">
                            <p>{details.description}</p>
                        </div>
                 </div>
               </div>
             
         </div>
    
         <div className="container  bg-secondary m-0">
             <img className="media-image2" src={details.image} alt={details.name}/>
             <div className="row">
                  <div className="col-12 text-center mt-1">
                          <div className=" fa fa-clock-o fa-md  media-icon mr-2">
                                    : {details.preptime}
                             </div>
                          <div className=" fa fa-cutlery fa-md mr-2">
                                  : {details.diet}
                           </div> 
                          <div className=" fa fa-user-circle fa-md mr-2">
                                 :  {details.servings}
                         </div>
                   </div>    
             </div>
                <div className="row">
                         <div className="col-12">
                              <h4>Ingrediants:</h4>
                                {<RenderIngrediants item={details}/>}
                          </div>
                </div>
            
                <div className="row">
                    <div className="col-12">
                        <h4>Methods:</h4>
                          {<RenderMethods item={details}/>}
                    </div>
             </div>  
         </div>

 </React.Fragment>     
   )
}
function RenderIngrediants({item}){
    const value = item.ingrediants.map((ingrediant,index)=>{
        return(           
                <li key={index}>
                    {ingrediant}
                </li>         
        )
    })
   return(
       <div >
           <ul>
             {value}
           </ul>
       </div>
   )
}
function RenderMethods({item}){
    const value = item.method.map((method,index)=>{
        return(
                <li key={index}>
                    {method}
                </li>   
        )
    })
   return(
       <div >
           <ul>
             {value}
           </ul>
       </div>
   )
}
function Southdish() {
    const recipes= SOUTHDISH;
    const dish= recipes.map((item)=>{
        return(
              <div>
                         <div key={item.id} className="col-12 justify-content-center mt-5">
                             <RenderDetails details={item}/>
                         </div>
                         
              </div>
        )
    })
  
    return (
        <div className="row row-container2">
            {dish}
        </div>
    );
}

export default Southdish;