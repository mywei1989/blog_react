import React from 'react';
import { Link } from 'react-router';

class Pagination extends React.Component{
  constructor(props){
    super(props);

    let pageIndex = props.pageIndex||1;
    let pageCount = props.pageCount||1;
    let prefix = props.prefix||'/';
    this.state={
      pageIndex:pageIndex,
      pageCount:pageCount,
      prefix:prefix
    }
  }


  componentWillReceiveProps(nextProps){
    this.setState({
      pageIndex:nextProps.pageIndex,
      pageCount:nextProps.pageCount,
      prefix:nextProps.prefix
    });
  }

  _prev(){
    if(this.state.pageIndex>1){
      this._handleChange(this.state.pageIndex-1);
    }else{
      this._handleChange(1);
    }
  }

  _handleChange(pageIndex){
    this.props.onChange(pageIndex);
  }

  render(){

    let pageHtml=[];
    if(this.props.pageIndex>1){
      if(this.props.pageIndex-1===1){
        pageHtml.push(<a className="extend prev" rel="prev" href={this.props.prefix+"/"} key="«">«</a>);
      }else{
        pageHtml.push(<a className="extend prev" rel="prev" href={this.props.prefix+"/page/"+(this.props.pageIndex-1)+"/"} key="«">«</a>);
      }
    }
    if(this.props.pageIndex===2){
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/"} key="1">1</a>);
    }else if(this.props.pageIndex===3){
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/"} key="1">1</a>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/2/"} key="2">2</a>);
    }else if(this.props.pageIndex===4){
      pageHtml.push(<a className="page-number" href="/" key="1">1</a>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/2/" } key="2">2</a>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/3/" } key="3">3</a>);
    }else if(this.props.pageIndex===5){
      pageHtml.push(<a className="page-number" href="/" key="1">1</a>);
      pageHtml.push(<span className="space" key="...">…</span>);
      for(let i=this.props.pageIndex-2;i<this.props.pageIndex;i++){
        pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+i+"/" } key={i}>{i}</a>);
      } 
    }
    pageHtml.push(<span className="page-number current" key={this.props.pageIndex} key={this.props.pageIndex}>{this.props.pageIndex}</span>);
    if(this.props.pageCount - this.props.pageIndex >= 4){
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+(this.props.pageIndex+1)+"/"} key={this.props.pageIndex+1} key={this.props.pageIndex+1} >{this.props.pageIndex+1}</a>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+(this.props.pageIndex+2)+"/"} key={this.props.pageIndex+2} key={this.props.pageIndex+2} >{this.props.pageIndex+2}</a>);
      pageHtml.push(<span className="space" key="...">…</span>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+this.props.pageCount+"/"} key={this.props.pageCount}>{this.props.pageCount}</a>);
    }else{
      for(let i=this.props.pageIndex+1;i<=this.props.pageCount;i++){
        pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+i+"/"} key={i}>{i}</a>);
      }
    }
    if(this.props.pageIndex!==this.props.pageCount){
      pageHtml.push(<a className="extend next" rel="next" href={this.props.prefix+"/page/"+(this.props.pageIndex+1)+"/"} key="»">»</a>);
    }


    return(
     <div className="archive-pagination">
        <div className="paginator">
        {pageHtml}
        </div>
      </div>
    )
  }
}

export default Pagination; 
