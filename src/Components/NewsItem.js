import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
      let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"img/noimg.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}....<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill " style={{zIndex:"1",left:"90%",backgroundColor:"rgb(0,127,175)"}}>
             {source.name}</span></h5>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            {/* _blank opens the linked doc into new tab. */}
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-secondary" rel="noreferrer"> 
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
