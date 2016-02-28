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
    this.getArticleList(nextProps);
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