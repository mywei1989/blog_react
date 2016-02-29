import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import $ from 'jquery';


import Settings from '../../../settings';
import Navigation from './Navigation';
import Information from './Information';
import Copyright from './Copyright';
import TagList from './TagList';
import ArchiveList from './ArchiveList';

import ArticleList from './ArticleList';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns page-header">
          <div>
            <h1>null的博客</h1>
          </div>
        </div>
        <div className="columns">
          <Navigation />
        </div>
        <div className="columns">
        <div className="block-body column three-fourths">
          {this.props.children}   
        </div>
        <div className="block-sidebar column one-fourth">
          <Information />
          <div id="tags" className="widget tags">
            <TagList promise={$.getJSON(Settings.getServiceUrl()+'/getAllTag')}/>
          </div>
          <div id="archives" className="widget archives">
            <ArchiveList promise={$.getJSON(Settings.getServiceUrl()+'/getArchive')}/>
          </div>
          <div className="widget text-content">
            <Copyright />
          </div>
        </div>
    </div>
      </div>
    )
  }
}

/*<div className="archive-pagination">
            <div className="paginator">
              <span className="page-number current">1</span>
              <a className="page-number" href="/2015/02/page/2/">2</a>
              <a className="extend next" rel="next" href="/2015/02/page/2/">»</a>
            </div>
          </div>
*/