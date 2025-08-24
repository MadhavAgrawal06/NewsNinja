import React, { Component } from 'react'
import NewsItem from "./NewsItem.js"
import Spinner  from './Spinner.js'


export default class News extends Component{

    constructor(){
        super()
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalArticles:0
        }
    }

    async componentDidMount(){
    this.setState({loading:true});
    let res=await fetch(`https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=in&max=16&apikey=3cc5202b0bf73daf081ae0e730374715&page=1`);         
    let data=await res.json();
    this.setState({
        articles:data.articles,
        totalArticles:data.totalArticles,
        loading:false 
    });
    }

    handlePrev=async()=>{
        this.setState({loading:true});
        let res=await fetch(`https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=in&max=16&apikey=3cc5202b0bf73daf081ae0e730374715&page=${this.state.page-1}`);
        let data=await res.json();
        this.setState({
            articles:data.articles,
            page:this.state.page-1,
            loading:false
        })
    }
    

    handleNext=async()=>{
        this.setState({loading:true});
        let res=await fetch(`https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=in&max=16&apikey=3cc5202b0bf73daf081ae0e730374715&page=${this.state.page+1}`);
        let data=await res.json();
        this.setState({
            articles:data.articles,
            page:this.state.page+1,
            loading:false
        })
    }
    

    render(){
        return(
            <div className='container my-3'> 

                <marquee><h1>NewNinja - Top Headlines </h1></marquee>
                {this.state.loading && <Spinner/>}

                <div className="row">   
                {!this.state.loading && this.state.articles.map((element)=>{
                    return  <div className='col-md-3 my-4 d-flex' key={element.url}>
                                 <NewsItem title={element.title?element.title.slice(0,60):"No title"} 
                                      description={element.description?element.description.slice(0,90):"No description"} 
                                      imgUrl={element.image?element.image:"https://img.freepik.com/free-vector/news-grunge-text_460848-9369.jpg"} 
                                      goToUrl={element.url}/>
                            </div>
                })}
                </div>

                <div className="container d-flex justify-content-center">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePrev}>&larr; Previous</button>
                    <button disabled={this.state.page +1 > Math.ceil(this.state.totalArticles/16)} type="button" className="btn btn-dark mx-2" onClick={this.handleNext}>&rarr; Next</button>
                </div>

            </div>
            
        )
    }
}
