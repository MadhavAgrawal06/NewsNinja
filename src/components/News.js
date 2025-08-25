import React, { Component } from 'react'
import NewsItem from "./NewsItem.js"
import Spinner  from './Spinner.js'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component{

    constructor(){
        super()
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
    }

    updateNews=async()=>{
        this.setState({loading:true});
        let res=await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=8af368a850524bd2af513e9b3ef9d126&page=${this.state.page}&pageSize=16`);
        let data=await res.json();
        this.setState({
            articles:data.articles,
            loading:false,
            totalResults:data.totalResults
        })
    }

    async componentDidMount(){
        this.updateNews();
    }
    fetchMoreData=async()=>{
        let nextPage=this.state.page+1;
        this.setState({page:nextPage})
        let res=await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=8af368a850524bd2af513e9b3ef9d126&page=${nextPage}&pageSize=16`);
        let data=await res.json();
        this.setState({
            articles:this.state.articles.concat(data.articles),
            totalResults:data.totalResults
        })
    }
    
    render(){
        return(
            <> 

                <h1 className='text-center mt-3 mb-1 mx-1'>NewNinja - Top {this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner/>}>
                
                <div className="container">
                <div className="row">
                {this.state.articles.map((element)=>{
                    return  <div className='col-md-3 my-4 d-flex' key={element.url}>
                                 <NewsItem title={element.title?element.title:"No title"} 
                                      description={element.description?element.description.slice(0,90):"No description"} 
                                      imgUrl={element.urlToImage?element.urlToImage:"https://img.freepik.com/free-vector/news-grunge-text_460848-9369.jpg"}
                                      author={element.author?element.author:"Anonymous"}
                                      date={new Date(element.publishedAt).toGMTString()}
                                      source={element.source.name} 
                                      goToUrl={element.url}/>
                            </div>
                })}
                </div>
                </div>

                </InfiniteScroll>

            </>
            
        )
    }
}
