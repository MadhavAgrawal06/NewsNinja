import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,goToUrl}=this.props;
    return (

      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a href={goToUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>

    );
  }
}
