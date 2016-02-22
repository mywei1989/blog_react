import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'


import App from './assets/blog/js/app';
import Navigation from './assets/blog/js/navigation';
import Information from './assets/blog/js/information';
import TagList from './assets/blog/js/tags';
import ArchiveList from './assets/blog/js/archives';

render((
	<Router history={browserHistory}>
    <Route path="/" component={App}>
    	<Route path="/repos" component={Repos}>
    		<Route path="/repos/:userName/:repoName" component={Repo}/>
    	</Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
),document.getElementById('root'));





//ReactDOM.render(<App />, document.getElementById('root'));

/*ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="user/:userID" component={User} />
    </Route>
  </Router>
), document.getElementById('root'));*/

/*render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={App} />
    	<Route path="/repos" component={Repos}>
    		<Route path="/repos/:userName/:repoName" component={Repo}/>
    	</Route>
      
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'));*/
