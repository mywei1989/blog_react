import React from 'react';

class Pagination extends React.Component{
  constructor(props){
    super(props);
    //console.log('Pagination.constructor');
  }


  /*componentWillMount(){
    console.log('Pagination.componentWillMount');
  }*/
  /*componentDidMount(){
    console.log('Pagination.componentDidMount');
  }*/
  /*componentWillUpdate(){
    console.log('Pagination.componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('Pagination.componentDidUpdate');
  }*/

  /*componentWillReceiveProps(){
    //this.getArticleList();
    //console.log('Pagination.componentWillReceiveProps');
  }*/

  _handleChange(){
    
  }

  render(){

    let pageHtml=[];
    if(this.props.pageIndex>1){
      pageHtml.push(<a className="extend prev" rel="prev" href={this.props.prefix+"/page/"+(this.props.pageIndex-1)} >«</a>)
    }
    if(this.props.pageIndex===2){
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/" }>1</a>);
    }else if(this.props.pageIndex===3){
      pageHtml.push(<a className="page-number" href="/">1</a>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/2/" }>2</a>);
    }else if(this.props.pageIndex===4){
      pageHtml.push(<a className="page-number" href="/">1</a>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/2/"}>2</a>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/3/"}>3</a>);
    }else if(this.props.pageIndex===5){
      pageHtml.push(<a className="page-number" href="/">1</a>);
      pageHtml.push(<span className="space">…</span>);
      for(let i=this.props.pageIndex-2;i<this.props.pageIndex;i++){
        pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+i+"/"}>{i}</a>);
      } 
    }
    pageHtml.push(<span className="page-number current">{this.props.pageIndex}</span>);
    if(this.props.pageCount - this.props.pageIndex >= 4){
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+(this.props.pageIndex-1)+"/"}>{this.props.pageIndex+1}</a>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+(this.props.pageIndex+2)+"/"}>{this.props.pageIndex+2}</a>);
      pageHtml.push(<span className="space">…</span>);
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+this.props.pageCount+"/"}>{this.props.pageCount}</a>);
    }else{
      for(let i=this.props.pageIndex+1;i<=this.props.pageCount;i++){
        pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+i+"/"}>{i}</a>);
      }
    }
    if(this.props.pageIndex!==this.props.pageCount){
      pageHtml.push(<a className="extend next" rel="next" href={this.props.prefix+"/page/"+(this.props.pageIndex+1)+"/"}>»</a>);
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

/*<div className="archive-pagination">
        <div className="paginator">
          <span className="page-number current">1</span>
          <a className="page-number" href="/2015/02/page/2/">2</a>
          <a className="extend next" rel="next" href="/2015/02/page/2/">»</a>
        </div>
      </div>*/

      /*{this.props.pageIndex ?(<div>1</div>):(<div>2/div>)}*/

     /* if(this.props.pageCount - this.props.pageIndex>=4){
      pageHtml.push(<a className="page-number" href={this.props.prefix+"/page/"+this.props.pageIndex+1+"/"}" >this.props.pageIndex+1</a>);
    }*/