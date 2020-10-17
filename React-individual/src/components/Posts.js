import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomFooter from "../Footer";
class Posts extends React.Component {
  render() {
    return (
      <div class="container"> 
        <div class="row"> 
            <div class="col-lg-10 mb-4"> 
                <div class="card-post"> 
                <img class="card-img-top" src="../imgs/sharapova-williams.jpg" />
        <a href="./img/test_2.mp4" download></a
        >  
                    <div class="card-body"> 
                        <h5 class="card-title">Sharapova vs Williams</h5> 
                        <p class="card-text"> 
                            Check this out if you want to see the unique tournament between one of the best two woman rackets in the world.
                        </p> 
  
                        <a href="https://www.youtube.com/watch?v=I77-CKHYFds" class="btn btn-watch"> 
                            Watch 
                        </a> 
                        <a href="/comment" class="btn btn-comment"> 
                            Comment 
                        </a> 
                    </div> 
                </div> 
            </div> <div class="col-lg-10 mb-4"> 
                <div class="card-post"> 
                    <img class="card-img-top" src="../imgs/d-n.jpg" alt=""/> 
  
                    <div class="card-body"> 
                        <h5 class="card-title">Card title</h5> 
                        <p class="card-text"> 
                        Check this out if you want to see the unique tournament between one of the best two man rackets in the world.
                        </p>
                          
                        <a href="https://www.tokyvideo.com/video/rafa-nadal-vs-novak-djokovic-2020-roland-garros-final-full-match" class="btn btn-watch"> 
                            Watch 
                        </a> 
                        <a href="/comment" class="btn btn-comment"> 
                            Comment 
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
