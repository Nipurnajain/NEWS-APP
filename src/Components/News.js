import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  
  //first constructor then render and then cdm runs
  constructor(){
    super();
    console.log("hello i am a constructor");
    this.state={
      articles:[],
      loading:false,
      page:1,
      pageSize:12
    }
  }
  async componentDidMount(){//runs after render runs
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=2d94c7aeab1d410d9f8d23336a384150&page=1&pageSize=12";
    let data= await fetch(url);
    let parsedData= await data.json();// converts fetched data to json format
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }
  handlePrevClick=async()=>{
    
console.log("prev");
let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=2d94c7aeab1d410d9f8d23336a384150&page=${this.state.page-1}&pageSize=12`;
    let data= await fetch(url);
    let parsedData= await data.json();// converts fetched data to json format
    console.log(parsedData);
    this.setState({articles:parsedData.articles})

    this.setState({page:this.state.page-1,
    articles:parsedData.articles})
  }
  handleNextClick=async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)){//so that if the next page is empty we dont get an empty page nd next button would not do anything

    }
    else{ 
console.log("next");
let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=2d94c7aeab1d410d9f8d23336a384150&page=${this.state.page+1}&pageSize=12`;
    let data= await fetch(url);
    let parsedData= await data.json();// converts fetched data to json format
    console.log(parsedData);
    this.setState({articles:parsedData.articles})

    this.setState({page:this.state.page+1,
      articles:parsedData.articles})
  }
}
  render() {
    return (<> 
      <div className="container my-3 text-center">
        <h2>Bulletin - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return( 
            <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>)
          })}
          
          
        </div>
      </div>
      <div className="container d-flex justify-content-between">
      <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
      <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
      </div>
      

      </>
    );
  }
}

export default News;
