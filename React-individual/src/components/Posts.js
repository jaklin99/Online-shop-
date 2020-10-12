import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomFooter from "../Footer";
class Posts extends React.Component {
  render() {
    return (
      <div class="container"> 
        <div class="row"> 
            <div class="col-lg-8 mb-4"> 
                <div class="card"> 
                    <img class="card-img-top" src="../imgs/court.jpg" alt=""/> 
  
                    <div class="card-body"> 
                        <h5 class="card-title">Sharapova vs Williams</h5> 
                        <p class="card-text"> 
                            Check this out if you want to see the unique tournament between one of the best two rackets in the world.
                        </p> 
  
                        <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Watch 
                        </a> 
                    </div> 
                </div> 
            </div> <div class="col-lg-4 mb-4"> 
                <div class="card"> 
                    <img class="card-img-top" src="../imgs/court.jpg" alt=""/> 
  
                    <div class="card-body"> 
                        <h5 class="card-title">Card title</h5> 
                        <p class="card-text"> 
                            Some quick example text to build on the  
                            card title and make up the bulk of the  
                            card's content. 
                        </p> 
                          
                        <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Card link 
                        </a> 
                       
                    </div> 
                </div> 
            </div> 
            <div class="col-lg-8 mb-4"> 
                <div class="card"> 
                    <img class="card-img-top" src="../imgs/court.jpg" alt=""/> 
  
                    <div class="card-body"> 
                        <h5 class="card-title">Card title</h5> 
                        <p class="card-text"> 
                            Some quick example text to build on  
                            the card title and make up the bulk  
                            of the card's content. 
                        </p> 
  
                        <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Card link 
                        </a> 
                        
                    </div> 
                </div> 
            </div> <div class="col-lg-4 mb-4"> 
                <div class="card"> 
                    <img class="card-img-top" src="../imgs/court.jpg" alt=""/> 
  
                    <div class="card-body"> 
                        <h5 class="card-title">Card title</h5> 
                        <p class="card-text"> 
                            Some quick example text to build on the  
                            card title and make up the bulk of the  
                            card's content. 
                        </p> 
                          
                        <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Card link 
                        </a> 
                        
                    </div> 
                </div> 
            </div>  
        </div> 
        <CustomFooter/>
    </div> 
  
    );
  }
}
export default Posts;
