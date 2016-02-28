import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';




import Settings from '../../../settings';

class Article extends React.Component{
  constructor(props){
    super(props);

    this.state={
      title:'',
      timeStr:'',
      tags:[],
      post:''
    }
  }

  componentDidMount(){
    this.getArticle();
  }

  getArticle(){
    let self = this;
    let url = Settings.getServiceUrl();

    url = url + '/' + this.props.params.year + '/' + this.props.params.month + '/' + this.props.params.name;
    $.ajax({
      url:url,
      type:'GET',
    }).done(function(result){
      self.setState({
        title:result.article.title,
        timeStr:result.article.timeStr,
        tags:result.article.tags,
        post:result.article.post
      });
    }.bind(self));
  }

  render(){
    if(this.props.route){
      return (
        <article>
          <header>
            <h2>
              <a href="#">{this.state.title}</a>
            </h2>
          </header>
          <div className="article-meta clearfix">
            <time className="left">{this.state.timeStr}</time>
            <ul className="tags left"></ul>
            <ul className="tags right">
              {
                this.state.tags.map(function(item,index){
                  return (<li><Link to={"/tag"+"/"+item.tag}>{item.tagName}</Link></li>)
                })
              }
            </ul>
          </div>
          <div className="markdown-body" dangerouslySetInnerHTML={{__html: this.state.post}}>
          </div>
        </article>
      )
    }else{
      return(
        <article>
          <header>
            <h2>
              <Link to={"/"+this.props.articleModel.time.year+"/"+this.props.articleModel.time.month+"/"+this.props.articleModel.name}>{this.props.articleModel.title}</Link>
            </h2>
          </header>
          <div className="article-meta clearfix">
            <time className="left">2015年9月29日</time>
            <ul className="tags left"></ul>
            <ul className="tags right">
              {
                this.props.articleModel.tags.map(function(item,index){
                  return (<li><Link to={"/tag"+"/"+item.tag}>{item.tagName}</Link></li>)
                })
              }
            </ul>
          </div>
          <div className="markdown-body" dangerouslySetInnerHTML={{__html: this.props.articleModel.post}}>
          </div>
        </article>
      )
    }
  }
}

export default Article


