import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import Settings from '../../../settings';
import Pagination from './Pagination';

class ArticleList extends  React.Component{
	constructor(props){
    super(props);
    this.state = {
      queryType:'',
      pageIndex:1,
      keyword:'',
      prefix:''
    };
  }

  componentWillMount(){
    /*console.log('ArticleList.componentWillMount');
    //this.getArticleList();
    console.log(this.props.route.to.queryType);
    console.log(this.props.params);
    console.log(this.state.articleListId);*/

    //this.getArticleList()
  }
  componentDidMount(){
    //console.log('ArticleList.componentDidMount');
    this.getArticleList()
  }
  componentWillUpdate(){
    //console.log('ArticleList.componentWillUpdate');
  }
  componentDidUpdate(){
    //console.log('ArticleList.componentDidUpdate');
    //console.log(this.state.prefix);
  }

  componentWillReceiveProps(nextProps){
    /*console.log('ArticleList.componentWillReceiveProps.start---------');
    console.log(nextProps);
    console.log(nextProps.params[this.props.route.to.queryType]);

    console.log('ArticleList.componentWillReceiveProps.end-----------');*/
    this.getArticleList(this.props.route.to.queryType,
                        nextProps.params[this.props.route.to.queryType],
                        nextProps.params['pageIndex']||1
      );
  }
  
  getActionUrl(){

  }

  getArticleList(_queryType,_keyword,_pageIndex){
    let self = this;
    let url = Settings.getServiceUrl();
    let queryType = _queryType || this.props.route.to.queryType;
    switch(queryType){
      case 'tag':
        var routeParams = _keyword || this.props.params.tag;
        url = url + '/tag/' + routeParams;
      break;
    }
    $.ajax({
      url:url,
      type:'GET'
    }).done(function(result){
        self.setState({
          pageIndex: result.pagination.pageIndex,
          pageCount: result.pagination.pageCount,
          prefix: result.pagination.prefix
        });
    }.bind(self));
  }



  render(){
    return(
        <div>
        <h3>{this.props.params.tag}</h3>
          <Pagination pageIndex={this.state.pageIndex} pageCount={this.state.pageCount} prefix={this.state.prefix}/>
        </div>
      );
  }
}; 

export default ArticleList;