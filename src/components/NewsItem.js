import React from 'react'

const NewsItem=(props)=>{
    let {title,description,imgurl,url,author,date,source}=props;
    return (
      <div>
        <div className="card" >
          <div>
            <span className="badge rounded-pill bg-danger"style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute', right:'0%'}}>
            {source}
            <span className="visually-hidden">unread messages</span>
            </span>
          </div>
        
            <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title==null?"unknown":title}..</h5>
                <p className="card-text">{description==null?"unknown":description}..</p>
                <p className="card-text"><small className="text-body-secondary">By <b>{author==null?"unknown":author}</b> on <br/><b>{date.slice(0,10)}</b></small></p>
                <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem