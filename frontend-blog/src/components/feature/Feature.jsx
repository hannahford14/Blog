import React, { Component } from 'react';

class Feature extends Component {
  render() {
    return (
      <div className="flex-item">
        <article className="article">
          <div className="d-flex">
            <a href="#">
              <img
                src={require(`../../photos/${this.props.image}`)}
                className="object-fit px-1"
                alt=""
              />
              <div className="px-1">
                <a href="#" className="text-title display-2"
                  >{this.props.title}
                </a>
                <p className="secondary-title text-secondary display-3">
                  <span
                    ><i className="far fa-clock text-primary"></i>
                    {this.props.date}
                  </span>
                </p>
              </div>
            </a>
          </div>
        </article>
      </div>
    );
  }
}

export default Feature;