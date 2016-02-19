import React from 'react';
import $ from 'jquery';



class TagList extends React.Component {
  /*getInitialState(){
    return {
      loading: true,
      error: null,
      data: null
    };
  }*/

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }

  componentDidMount(){
    this.props.promise.then(
    value => this.setState({loading: false, data: value}),
    error => this.setState({loading: false, error: error}));
  }

  render(){
    if(this.state.loading){
        return <span>Loading...</span>
    }else if(this.state.error != null){
      return <span>Error:{this.state.error.message}</span>
    }else{
      var tags = this.state.data;
      var taglist = tags.map(function (tag) {
        return (
          <li className="tag-list-item" key={tag.tag}> 
            <a className="tag-list-link" href={"/tag/"+tag.tag+"/"}>{tag.tagName}</a>
          </li>
          );
      });
      return (
        <ul className="tag-list">
          {taglist}
        </ul>
      );
    }
  }
}

export default TagList;