import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Comments from '../../components/comments/Comments';
import './CreateAccount.css';
import img15 from '../../photos/hair.jpg'; 
import img16 from '../../photos/decor.jpg'; 
import img17 from '../../photos/makeup.jpg'; 
import img18 from '../../photos/image1.webp'; 
import img19 from '../../photos/Avatar.jpeg'; 
import img20 from '../../photos/image.png'; 
import img21 from '../../photos/sample-profile-pic.png'; 

class CreateAccount extends Component {
  

  render(){
    return (
      <div>
        <header id="header" className="shadow bg-light">
          <Navbar/>
        </header>
        <main id="site-main">
          
          <section className="container">
            
          
          
    
        <div className="comment-form px-2 container">
          <h3 className="text-center display-1 secondary-title py-2">Create Account</h3>
          <div className="d-flex justify-content-between flex-wrap" >
            <input type="text" id="getCommentFName" className="form-control margin" placeholder="First Name"/>
            <input type="text" id="getCommentLName" className="form-control margin" placeholder="Last Name"/>
            <input type="email" id="getCommentEmail" className="form-control margin" placeholder="E-mail"/>
            <input type="text" id="getCommentFName" className="form-control margin" placeholder="Username"/>
            <input type="text" id="getCommentLName" className="form-control margin" placeholder="Password"/>
            <input type="email" id="getCommentEmail" className="form-control margin" placeholder="Confirm Password"/>
          </div>
             
            
            <div className="text-center">
              <button className="btn btn-primary secondary-title text-light mb-3 create-account-button2" onClick={this.submit}>Submit</button>
            </div>
            
          
            </div> 
      
      
      
       
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

export default CreateAccount;
