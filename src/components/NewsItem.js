import React from "react";

export default function NewsItem(props){
    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display:"flex",
                       justifyContent:"flex-end",
                       position:"absolute",
                       right:"0"}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}
