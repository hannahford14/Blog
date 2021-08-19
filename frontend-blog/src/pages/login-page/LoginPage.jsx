import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Blog from '../../components/blog/Blog'
// import './HomePage.css';
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
            
            
          
        </div>
       
       {/* Blog Content*/}
       </section>
       </main>
     

        <Footer
          image1={img15}
          image2={img16}
          image3={img17}
          text1="Feature 1 post"
          text2="Feature 1 post"
          text3="Feature 1 post"
          date1="Thur 07, 2021"
          date2="Friday 08, 2021"
          date3="Thur 02, 2021"
        /> 
      </div>
    );
  }
}

export default LoginPage;
