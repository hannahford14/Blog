
import React, {Component} from 'react';
import './Comments.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import img20 from '../../photos/image.png'; 
import img21 from '../../photos/sample-profile-pic.png'; 
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


class Comments extends Component {
  render(){
    

    return (
       
        
         
          <div className="comment-item py-2 form-control-comment">
            <div className="d-flex">
            
              <div className="author-avatar px-2">
              
              <div className="author-avatar">
              <img src={img21} className="rounded" alt="" />
            </div>

              </div>
              <div className="comment-content">
                <h5 className="display-2 m-0">{`${this.props.firstName} ${this.props.lastName}`} </h5>
                <p className="title-secondary text-dark">
                  {this.props.message}
                  
                </p>
                <span
                  ><i className="far fa-clock text-primary"></i> {' '}
                  {this.props.date}
                </span> {' '}
 
              </div> 
            </div>
          </div>

      
        
        );
  }
}

            export default Comments; 
