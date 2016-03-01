import React from 'react';
import { Link } from 'react-router';
import favicon from '../images/favicon';
import gitosc from '../images/gitosc';
import github from '../images/github';

class Navigation extends React.Component{
	render(){
		return (
			<div className="navigation clearfix">
				<nav className="menus-main left">
					<Link to="/" className="favicon">
						<img src={favicon} alt="null在吹牛逼" title="null在吹牛逼" />
					</Link>
					<Link to="/about">关于</Link>
					<Link to="/profile">简历</Link>
					<Link to="/links">链接</Link>
					<Link to="/booklist">书单</Link>
					<Link to="/tweets">碎语</Link>
					<Link to="/">所有日志</Link>
				</nav>
				<nav className="menus-right right">
					<a target="_blank" href="http://git.oschina.net/mywei1989" className="favicon">
           <img src={gitosc} alt="myGitosc" title="myGitosc" />
          </a>
          <a target="_blank" href="https://github.com/mywei1989" className="favicon">
           <img src={github} alt="myGithub" title="myGithub" />
          </a>
				</nav>
			</div>
		)
	}
}


export default Navigation;


/*<a href="/" className="favicon">
						<img src={favicon} alt="null在吹牛逼" title="null在吹牛逼" />
					</a>
					<a href="/">关于</a>
					<a href="/">简历</a>
					<a href="/">链接</a>
					<a href="/">书单</a>
					<a href="/">碎语</a>
					<a href="/">所有日志</a>
*/