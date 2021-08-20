import React, { Component } from 'react';
import './Blog.css';

class Blog extends Component {
  render(){
    return(
      <div className="container grid-item">
        <article className="article">
          <div className="card">
            <div className="overflow-img">
              <a href={`#/blog/${this.props.title}`}>
                <img src={require(`../../photos/${this.props.image}`)} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="card-body text-center px-1">
              <a href="/" className="text-title display-1 text-dark">
                {this.props.title}
              </a>
              <p className="secondary-title text-secondary display-3">
                <span
                  ><i className="far fa-clock text-primary"></i> {' '}
                  {this.props.date}
                </span> {' '}
                <span>
                  <i className="far fa-comments text-primary"></i> {' '}
                  {this.props.numComments}
                </span>
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Blog;