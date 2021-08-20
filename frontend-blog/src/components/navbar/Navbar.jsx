import React, {Component} from 'react';
import './Navbar.css';
import '../../App.css'
import CreateBlog from '../../components/blog/Blog'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  toggleNavbar = () => {
    let toggle = document.querySelector("#header .toggle-button");
    let collapse = document.querySelectorAll("#header .collapse"); 

    toggle.addEventListener('click', function(){
      collapse.forEach(col => col.classList.toggle("collapse-toggle"));
    })
  }

  render(){
    return(
      <header id="header" className="shadow bg-light">
        <nav className="container navbar">
          <a href="/index.html" className="nav-brand text-dark"> À la Mode </a>

          {/* <!--toggle button--> */}
          <button 
            className="toggle-button"
            onClick={this.toggleNavbar}
          >
            <span><i className="fas fa-bars"></i></span>
          </button>

          {/* <!--collapse on toggle button click--> */}
          <div className="collapse">
            <ul className="navbar-nav">
              <a href="#/" className="nav-link">Home</a>
              <a href="#/blog" className="nav-link">Featured Blog</a>
             
              <a href="#/createBlog" className="nav-link">Create Blog</a>
              <a href="#/createAccount" className="nav-link">Create Account</a>
              
            </ul>
          </div>

          {/* <!--collapse on toggle button click--> */}
          <div className="collapse">
            <ul className="navbar-nav">
           
              <a href="https://www.facebook.com/" className="nav-link"
                ><i className="fab fa-facebook-f"></i
              ></a>
              <a href="https://twitter.com/" className="nav-link"
                ><i className="fab fa-twitter"></i
              ></a>
              <a href="https://www.instagram.com/" className="nav-link"
                ><i className="fab fa-instagram"></i
              ></a>
              <a href="https://www.linkedin.com/" className="nav-link"
                ><i className="fab fa-linkedin"></i
              ></a>
              <a href="https://www.pinterest.com/" className="nav-link"
                ><i className="fab fa-pinterest"></i
              ></a>
              <a href="#/login" className="nav-link"
                ><i className="fas fa-sign-in-alt"></i
              ></a>
              <a href="#/login" className="nav-link"
                ><i className="fas fa-sign-out-alt"></i
              ></a>

          
        

        

             
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;