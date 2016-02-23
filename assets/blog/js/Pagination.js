import React from 'react';

class Pagination extends React.Component{
  constructor(props){
    super(props);
    //console.log('Pagination.constructor');
  }


  /*componentWillMount(){
    console.log('Pagination.componentWillMount');
  }
  componentDidMount(){
    console.log('Pagination.componentDidMount');
  }
  componentWillUpdate(){
    console.log('Pagination.componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('Pagination.componentDidUpdate');
  }*/

  render(){
    /*console.log('pageIndex:'+this.props.pageIndex);
    console.log('pageCount:'+this.props.pageCount);*/
    console.log('prefix:'+this.props.prefix);
    return(
      <div className="archive-pagination">
        <div className="paginator">
          <span className="page-number current">1</span>
          <a className="page-number" href="/2015/02/page/2/">2</a>
          <a className="extend next" rel="next" href="/2015/02/page/2/">»</a>
        </div>
      </div>
    )
  }
}

export default Pagination; 