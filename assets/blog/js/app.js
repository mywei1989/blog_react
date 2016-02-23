import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import $ from 'jquery';

import Navigation from './navigation';
import Information from './information';
import TagList from './tags';
import ArchiveList from './archives';



/*export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/user/bob" activeClassName="active">Bob</Link></li>
          <li><Link to={{ pathname: '/user/bob', query: { showAge: true } }} activeClassName="active">Bob With Query Params</Link></li>
          <li><Link to="/user/sally" activeClassName="active">Sally</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}*/





export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns page-header">
          <h1>null的博客</h1>
        </div>
        <div className="columns">
          <Navigation />
        </div>
        <div className="columns">
        <div className="block-body column three-fourths">
          {this.props.children}

          <div className="archive-pagination">
            <div className="paginator">
              <span className="page-number current">1</span>
              <a className="page-number" href="/2015/02/page/2/">2</a>
              <a className="extend next" rel="next" href="/2015/02/page/2/">»</a>
            </div>
          </div>
        </div>
        <div className="block-sidebar column one-fourth">
          <Information />
          <div id="tags" className="widget tags">
            <TagList promise={$.getJSON('http://localhost:3001/getAllTag')}/>
          </div>
          <div id="archives" className="widget archives">
            <ArchiveList promise={$.getJSON('http://localhost:3001/getArchive')}/>
          </div>
          <div className="widget text-content">
            <p>
              该博客使用基于 &nbsp;
              <a href="http://www.expressjs.com">express</a>
            </p>
          </div>
        </div>
    </div>
      </div>
    )
  }
}


