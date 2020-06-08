import React from 'react';

function Footer(props) {
    return (
        <div>
                 <div className="container-fluid footer">
                       <div className="row ">
                               <div className="col-12 justify-content-center text-center brand">
                                      <strong><p>Brito's Recipes</p></strong>
                               </div>

                        </div>
                        <div className="row">
                               <div className=" col-12 col-md-7  justify-content-center text-center">
                                     <a href="#" ><i className="fa fa-twitter fa-md mr-3"></i></a>
                                     <a href="#" ><i className="fa fa-facebook-f fa-md mr-3"></i></a>
                                     <a href="#" ><i className="fa fa-instagram fa-md mr-3"></i></a>
                                     <a href="#" ><i className="fa fa-google-plus fa-md mr-3"></i></a>
                                     <a href="#" ><i className="fa fa-linkedin fa-md "></i></a>
                               </div>
                               <div className="col-12 col-md-5 text-center">
                                      <p><span className="fa fa-copyright fa-md "></span>Copyrights@ Merito 2020</p>
                               </div>
                        </div>
                </div> 
        </div>
    );
}

export default Footer;