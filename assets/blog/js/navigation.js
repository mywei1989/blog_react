import React from 'react';
import $ from 'jquery';

class Navigation extends React.Component{
	render(){
		return (
			<div className="navigation clearfix">
				<nav className="menus-main left">
					<a href="/" className="favicon">
						
					</a>
					<a href="/">关于</a>
					<a href="/">简历</a>
					<a href="/">链接</a>
					<a href="/">书单</a>
					<a href="/">碎语</a>
					<a href="/">所有日志</a>
				</nav>
				<nav className="menus-right right">
					
				</nav>
			</div>
		)
	}
}
//<img alt="null在吹牛逼" src="../images/favicon.png"/>
//<a target="_blank" href="http://git.oschina.net/mywei1989" className="favicon">
          //  <img alt="myGitosc" src="../images/gitosc.png">
          //</a>
          //<a target="_blank" href="https://github.com/mywei1989" className="favicon">
          //  <img alt="myGithub" src="../images/github.png">
          //</a>

export default Navigation;