import React from 'react';
import { Link } from 'react-router';

class ArchiveList extends React.Component{
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
        var archives = this.state.data;
        var archivelist = archives.map(function (archive) {
          return (
            <li className="archive-list-item" key={archive.dateCalc}>
              <Link className="archive-list-link" to={"/"+archive.year+"/"+archive.month+"/"}>{archive.monthFormat} {archive.year}</Link>
              <span className="archive-list-count">{archive.count}</span>
            </li>
          );
        });
        return (
          <ul className="archive-list" >
            {archivelist}
          </ul>
        );
      }
  }
}

export default ArchiveList;
