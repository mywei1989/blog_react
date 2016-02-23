import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import Settings from '../../../settings';
import Pagination from './Pagination';

class ArticleList extends  React.Component{
	constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }

  componentWillMount(){
    console.log('ArticleList.componentWillMount');
    //this.getArticleList();
  }
  componentDidMount(){
    console.log('ArticleList.componentDidMount');
    //this.getArticleList();
  }
  componentWillUpdate(){
    console.log('ArticleList.componentWillUpdate');
    this.getArticleList();
  }
  componentDidUpdate(){
    console.log('ArticleList.componentDidUpdate');
  }

  componentWillReceiveProps(){
    //this.getArticleList();
  }
  


  getArticleList(){
    var url = Settings.getServiceUrl();
    var queryType = this.props.route.to.queryType;
    switch(queryType){
      case 'tag':
        var routeParams = this.props.params.tag;
        url = url + '/tag/' + routeParams;
      break;
    }
    var that = this;
    $.get(url,function(result){
      /*that.props({
        pageIndex: result.pagination.pageIndex,
        pageCount: result.pagination.pageCount,
        prefix: result.pagination.prefix
      });*/
      Pagination.setProps({
        pageIndex: result.pagination.pageIndex,
        pageCount: result.pagination.pageCount,
        prefix: result.pagination.prefix
      });
      console.log(that.props.pageIndex);
    }.bind(that));
  }



  render(){
  	return (
  		<div>
	  		<h3>{this.props.params.tag}</h3>
        <Pagination pageIndex={this.state.pageIndex} pageCount={this.state.pageCount} prefix={this.state.prefix}/>
  		</div>
  	)
  }
}; 

export default ArticleList;