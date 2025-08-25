import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,goToUrl,author,date,source}=this.props;
    return (

      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="badge text-bg-primary mb-2">Source: {source}</div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          
          <p className="card-text"><small className="text-secondary">By {author} on {date}</small></p>
          <a href={goToUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>

    );
  }
}
