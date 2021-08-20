import React, {Component} from 'react';
import Feature from '../feature/Feature';
import _ from 'lodash';
import './Footer.css';
import '../../App.css'

class Footer extends Component {
  render(){
    return(
      <footer id="footer">
        <div className="container">
          <div className="row mb-3">
            <div className="col-3">
              <h2 className="footer-title secondary-title">About Us</h2>
              <div className="secondary-title text-secondary">
                <p className="mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
                  incidunt dicta suscipit esse commodi autem!
                </p>
                <address>
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  21747 Omeara Terrace, apt 404, Ashburn VA, 20147
                </address>
                <div className="phone">
                  <i className="fas fa-mobile text-primary"></i>
                  571-282-8482
                </div>
                <div className="email">
                  <i className="fas fa-envelope text-primary"></i>
                  ford2hg@gmail.com
                </div>
              </div>
            </div>
            <div className="col-3">
              <h2 className="footer-title secondary-title">Feature Post</h2>
              {
                !_.isEmpty(this.props.featured) ? 
                  Object.values(this.props.featured).map((key) => {
                    return(
                      <Feature
                        key={`${key.image}-Footer`}
                        image={key.image}
                        title={key.title}
                        date={key.date}
                      />
                    );
                  }) :
                  <p className="mt-2">
                    "No Featured Posts"
                  </p>
              } 
            </div>
            <div className="col-3">
              <h2 className="footer-title secondary-title">Tags</h2>
              <div className="tags">
                <div className="d-flex flex-wrap">
                  <a href="#" className="nav-link btn bg-light">Travel</a>
                  <a href="#" className="nav-link btn bg-light">Food</a>
                  <a href="#" className="nav-link btn bg-light">Lifestyle</a>
                  <a href="#" className="nav-link btn bg-light">Technology</a>
                  <a href="#" className="nav-link btn bg-light">Fashion</a>
                </div>
              </div>

              <h2 className="footer-title secondary-title mt-2">Social</h2>
              <div className="tags social">
                <div className="d-flex flex-wrap">
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
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights">
            <p className="text-center text-secondary display-2">
              © 2021 <a href="#" className="text-primary">Hannah's Blog</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;

