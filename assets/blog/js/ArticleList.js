import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import Settings from '../../../settings';
import Article from './Article';
import Pagination from './Pagination';

class ArticleList extends  React.Component{
	constructor(props){
    super(props);
    this.state = {
      list:[],
      pageIndex: 1,
      pageCount: 1,
      prefix: '/',
      queryType:''
    };
  }
  componentDidMount(){
    this.getArticleList(this.props);
  }
  componentWillReceiveProps(nextProps){
    console.log('ArticleList.componentWillReceiveProps');
    console.log(nextProps);
    this.getArticleList(nextProps);
    /*this.getArticleList(this.props.route.to.queryType,
                        nextProps.params[this.props.route.to.queryType],
                        nextProps.params['pageIndex']||1
      );*/
  }

  getArticleList(props){
    let self = this;
    let url = Settings.getServiceUrl();
    let queryType = props.route.to.queryType;
    switch(queryType){
      case '/':
        if(props.params.pageIndex){
          url = url + '/page/' + props.params.pageIndex + '/';
        }
      break;
      case 'tag':
        let keyword = props.params.tag;
        url = url + '/tag/' + keyword + '/';
        if(props.params.pageIndex){
          url = url + 'page/' + props.params.pageIndex + '/';
        }
      break;
      case 'archive':
        url = url + '/' + props.params.year + '/' + props.params.month + '/';
        if(props.params.pageIndex){
          url = url + 'page/' + props.params.pageIndex + '/';
        }
      break;
    }
    $.ajax({
      url:url,
      type:'GET',
      cache:false
    }).done(function(result){
        self.setState({
          queryType:queryType,
          list:result.list,
          pageIndex: result.pagination.pageIndex,
          pageCount: result.pagination.pageCount,
          prefix: result.pagination.prefix||''
        });
    }.bind(self));
  }

  /*getArticleList(_queryType,_keyword,_pageIndex){
    console.log(_queryType);
    console.log(_keyword);
    console.log(_pageIndex);
    let self = this;
    let url = Settings.getServiceUrl();
    let queryType = _queryType || this.props.route.to.queryType;
    switch(queryType){
      case '/':
        if(this.props.params.pageIndex){
          url = url + '/page/' + this.props.params.pageIndex + '/';
        }
      break;
      case 'tag':
        let keyword = _keyword || this.props.params.tag;
        url = url + '/tag/' + keyword + '/';
        if(this.props.params.pageIndex){
          url = url + 'page/' + this.props.params.pageIndex + '/';
        }
      break;
      case 'archive':
        url = url + '/' + this.props.params.year + '/' + this.props.params.month + '/';
        if(this.props.params.pageIndex){
          url = url + 'page/' + this.props.params.pageIndex + '/';
        }
      break;
    }
    console.log(url);
    $.ajax({
      url:url,
      type:'GET',
      cache:false
    }).done(function(result){
        self.setState({
          queryType:queryType,
          list:result.list,
          pageIndex: result.pagination.pageIndex,
          pageCount: result.pagination.pageCount,
          prefix: result.pagination.prefix||''
        });
        console.log(result)
    }.bind(self));
  }*/



  render(){
    return(
        <div>
          {
            this.state.list.map(function(item,index){
              return <Article articleModel={item} key={index} />
            })
          }

          <Pagination onChange={this.onChange} pageIndex={this.state.pageIndex} pageCount={this.state.pageCount} prefix={this.state.prefix} />
        </div>
      );
  }
}; 

export default ArticleList;