import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Article extends  React.Component{
	constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }

  render(){
  	return (
  		<div>
	  		<h2>{this.props.params.cmd}</h2>
	  		<h3>{this.props.params.tag}</h3>
  		</div>
  	)
  }
}; 

export default Article;