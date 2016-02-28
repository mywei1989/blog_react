import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'



import App from './assets/blog/js/App';
import Navigation from './assets/blog/js/Navigation';
import Information from './assets/blog/js/Information';
import TagList from './assets/blog/js/TagList';
import ArchiveList from './assets/blog/js/ArchiveList';

import ArticleList from './assets/blog/js/ArticleList';
import Article from './assets/blog/js/Article';

render((
	<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ArticleList} to={{queryType:'/'}}/>
      <Route path="/page/:pageIndex" component={ArticleList} to={{queryType:'/'}}/>
      <Route path="/tag/:tag/" component={ArticleList} to={{queryType:'tag'}}/>
      <Route path="/tag/:tag/page/:pageIndex/" component={ArticleList} to={{queryType:'tag'}}/>
      <Route path="/:year/:month/" component={ArticleList} to={{queryType:'archive'}}/>
      <Route path="/:year/:month/page/:pageIndex/" component={ArticleList} to={{queryType:'archive'}}/>
      <Route path="/:year/:month/:name" component={Article} to={{queryType:'article'}} />
    </Route>
  </Router>
),document.getElementById('root'));





