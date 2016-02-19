import React, { Component } from 'react';
//var $ = require('jquery');
import $ from 'jquery';
import Mytest from './mytest';
import TagList from './tags';



export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns page-header">
          <h1>null的博客</h1>
        </div>
        <div className="columns">
          <div className="navigation">
            <nav className="menus-main">
              <a href="/" className="favicon">
                <img alt="null在吹牛逼" src="./assets/blog/images/favicon.png"/>
              </a>
              <a href="/">关于</a>
              <a href="/">简历</a>
              <a href="/">链接</a>
              <a href="/">书单</a>
              <a href="/">碎语</a>
              <a href="/">所有日志</a>
            </nav>
            <nav className="right menus-right">
              <a href="/"></a>
              <a target="_blank" href="https://github.com/mywei1989">fork on Github</a>
            </nav>
          </div>
        </div>
        <div className="columns">
        <div className="block-body column three-fourths">
          <div className="archive-pagination">
            <div className="paginator">
              <span className="page-number current">1</span>
              <a className="page-number" href="/2015/02/page/2/">2</a>
              <a className="extend next" rel="next" href="/2015/02/page/2/">»</a>
            </div>
          </div>
        </div>
        <div className="block-sidebar column one-fourth">
          <div className="widget text-content">
            <p>家穷人丑一米六九小学学籍农村户口?</p>
            <ul>
              <li>这是个悲伤的故事</li>
              <li>
                <a href="http://www.cnblogs.com/nullcnb">独立博客</a>
                作者
              </li>
            </ul>
          </div>
          <div id="tags" className="widget tags">
            <TagList promise={$.getJSON('http://localhost:3001/getAllTag')}/>
          </div>
          <div id="archives" className="widget archives">
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

