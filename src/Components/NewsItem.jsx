import React from 'react'
const NewsItem =(props)=> {
    
        let { title, Description, imgUrl, newsUrl,author,date,source } = props;
        return (
            <div className="container my-3">
                <div className="card" style={{ width: '18rem' }}>
                    <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
                <span className="badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <img src={!imgUrl ? "https://i-invdn-com.investing.com/news/LYNXNPEC7P0Q4_L.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{Description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"UnKnown": author} on 
                        {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
