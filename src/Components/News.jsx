import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
const News = (props) => {
    const [page, setPage] = useState(1);
    const [loading, setloading] = useState(true)
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const upDateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=69287490a750426db77d1b92d575e406&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setloading(false)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}`
        upDateNews();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
};

return (
    <>
        <h1 className="text-center mb-3" style={{marginTop:"90px"}}>NewsApp- Top {capitalizeFirstLetter(props.category)} Headline </h1>

        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
        >
            <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} Description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                            />
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>

    </>
)
}
News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: "sports"
}
News.propsType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
