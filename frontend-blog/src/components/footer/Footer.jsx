import React, {Component} from 'react';
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
              <div className="feature-post">
                <div className="flex-item">
                  <article className="article">
                    <div className="d-flex">
                      <a href="#">
                        <img
                          src={this.props.image1}
                          className="object-fit px-1"
                          alt=""
                        />
                        <div className="px-1">
                          <a href="#" className="text-title display-2"
                            >{this.props.text1}
                          </a>
                          <p className="secondary-title text-secondary display-3">
                            <span
                              ><i className="far fa-clock text-primary"></i>
                              {this.props.date1}
                            </span>
                          </p>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="flex-item">
                  <article className="article">
                    <div className="d-flex">
                      <a href="#">
                        <img
                          src={this.props.image2}
                          className="object-fit px-1"
                          alt=""
                        />
                        <div className="px-1">
                          <a href="#" className="text-title display-2"
                            >{this.props.text2}
                          </a>
                          <p className="secondary-title text-secondary display-3">
                            <span
                              ><i className="far fa-clock text-primary"></i>{this.props.date2}
                              </span>
                          </p>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="flex-item">
                  <article className="article">
                    <div className="d-flex">
                      <a href="#">
                        <img
                          src={this.props.image3}
                          className="object-fit px-1"
                          alt=""
                        />
                        <div className="px-1">
                          <a href="#" className="text-title display-2"
                            >{this.props.text3}
                          </a>
                          <p className="secondary-title text-secondary display-3">
                            <span
                              ><i className="far fa-clock text-primary"></i>
                              {this.props.date3}
                            </span>
                          </p>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
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
                  <a href="#" className="nav-link btn bg-light"
                    ><i className="fab fa-facebook-f"></i
                  ></a>
                  <a href="#" className="nav-link btn bg-light"
                    ><i className="fab fa-twitter"></i
                  ></a>
                  <a href="#" className="nav-link btn bg-light"
                    ><i className="fab fa-instagram"></i
                  ></a>
                  <a href="#" className="nav-link btn bg-light"
                    ><i className="fab fa-linkedin"></i
                  ></a>
                  <a href="#" className="nav-link btn bg-light"
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

