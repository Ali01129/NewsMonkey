import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News=(props)=>{
    const [articles, setArticles]=useState([]);
    const [loading, setLoading]=useState(true);
    const [page, setPage]=useState(1);
    const [totalnews, setTotalnews]=useState(0);

        useEffect(()=>{
            fetchData();  
            //eslint disable-next-line
        },[])
        
        useEffect(()=>{
            fetchData();
            if(props.category==="general"){
                document.title="NewsMonkey";
            }
            else{
                document.title=`${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonkey`;
            }
        },[props.category])
        
        const fetchData=async()=> {
            props.setprogress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=1&pagesize=${props.pgsize}`;
            setLoading(true);
            let data = await fetch(url);
            props.setprogress(20);
            let parsedData = await data.json();
            props.setprogress(30);
            setLoading(false);
            setArticles(parsedData.articles);
            setTotalnews(parsedData.totalResults);
            props.setprogress(100);
        }
        const updateNews= async(pgno)=>{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pgsize}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
            setLoading(false);
            setTotalnews(parsedData.totalResults);
        }
        const PrevClick=async()=>{
            // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=931055629c5b4bc3a0ab5199fca7a44a&page=${page - 1}&pagesize=${props.pgsize}`;
            // setState({loading: true});
            // let data= await fetch(url);
            // let parsedData= await data.json();
            // setState({
            //     loading: false,
            //     page:page - 1,
            //     articles:parsedData.articles
            // })
            setPage(page-1);
            updateNews();
        }
        const NextClick=async()=>{
            // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=931055629c5b4bc3a0ab5199fca7a44a&page=${page + 1}&pagesize=${props.pgsize}`;
            // setState({loading: true});
            // let data= await fetch(url);
            // let parsedData= await data.json();
            // setState({
            //     loading: false,
            //     page:page + 1, 
            //     articles:parsedData.articles
            // })
            setPage(page+1);
            updateNews();
        }
    return (
        <>
            <h1 className="text-center" style={{margin: '30px 0px', marginTop: '80px'}}>Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
            {loading&&<Spinner/>}
                <div className="container">
                    <div className="row">
                    {articles.map((element)=>{
                        return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} 
                                    imgurl={element.urlToImage==null?"https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000":element.urlToImage} url={element.url}
                                    author={element.author} date={element.publishedAt} source={element.source.name}
                                    />
                                </div>
                    })}
                    </div>
                </div>

            <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type="button" className="btn btn-primary"onClick={PrevClick}>&larr; Previous</button>
                <button disabled={page+1 > Math.ceil(totalnews/props.pgsize)} type="button" className="btn btn-primary"onClick={NextClick}>Next &rarr;</button>
            </div>
        </>
    )
}

export default News