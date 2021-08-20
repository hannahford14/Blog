import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Blog from '../../components/blog/Blog'
import './LoginPage.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import img15 from '../../photos/hair.jpg'; 
import img16 from '../../photos/decor.jpg'; 
import img17 from '../../photos/makeup.jpg'; 
import img18 from '../../photos/image1.webp'; 
import img19 from '../../photos/Avatar.jpeg'; 
import img20 from '../../photos/image.png'; 
import img21 from '../../photos/sample-profile-pic.png'; 

class LoginPage extends Component {
  render(){
    return (
      <div>
        <header id="header" className="shadow bg-light">
          <Navbar/>
        </header>
        <main id="site-main">
          
          <section className="container">
            
        
        {/* Login Inputs*/}
        <div className="comment-form px-2 container">
          <h3 className="text-center display-1 secondary-title py-2">Login</h3>
          <div className="d-flex justify-content-between flex-wrap">
            <input type="text" className="form-control mb-3" placeholder="Username"/>
            <input type="text" className="form-control py-1" placeholder="Password"/>
           
          </div>
            
          <div className="text-center">
              
              <button className="btn btn-primary secondary-title text-light mb-3 login-button ">Login</button>
              <form action="#/createAccount">
             <button type="submit" className = "btn btn-primary secondary-title text-light mb-3 create-account-button">Create Account</button>
          </form>
             
            </div>
          
        </div>
       
       {/* Blog Content*/}
       </section>
       </main>
     

      </div>
    );
  }
}

export default LoginPage;
