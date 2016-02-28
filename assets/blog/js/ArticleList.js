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
    this.getArticleList()
  }
  componentWillReceiveProps(nextProps){
    this.getArticleList(this.props.route.to.queryType,
                        nextProps.params[this.props.route.to.queryType],
                        nextProps.params['pageIndex']||1
      );
  }

  getArticleList(_queryType,_keyword,_pageIndex){
    let self = this;
    let url = Settings.getServiceUrl();
    let queryType = _queryType || this.props.route.to.queryType;
    console.log(queryType);
    switch(queryType){
      case '/':
        if(this.props.params.pageIndex){
          url = url + '/page/' + this.props.params.pageIndex + '/';
        }
      break;
      case 'tag':
        console.log(queryType);
        var keyword = _keyword || this.props.params.tag;
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
      type:'GET'
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