import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import Settings from '../../../settings';

class ArticleList extends  React.Component{
	constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }

  componentDidMount(){
    /*console.log(this.props.params.cmd);
    console.log(this.props.params.tag);*/
    //this.props.routes
    /*for(var i in this.props.routes){
      console.log(i.path);
    }*/
    console.log(this.props);
    /*this.props.routes.map(function(item,index){
      console.log(item.path);
    });*/

  }

  componentDidUpdate(){
    console.log(this.props);
  }

  render(){
  	return (
  		<div>
	  		<h3>{this.props.params.tag}</h3>
  		</div>
  	)
  }
}; 

export default ArticleList;