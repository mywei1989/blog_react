import React from 'react';
import nodejs from '../images/nodejs';
import react from '../images/react';
import mongodb from '../images/mongodb';
import github from '../images/github';

class Copyright extends React.Component{
  render(){
    return (
      <div className="copyright clearfix">
        <p>该博客基于一下技术构建：</p>
        <div className="logos clearfix">
          <a target="_blank" href="https://nodejs.org" className="favicon">
            <img alt="nodejs" src={nodejs} />
          </a>
          <a target="_blank" href="https://facebook.github.io/react/" className="favicon">
            <img alt="react" src={react} />
          </a>
          <a target="_blank" href="https://www.mongodb.com" className="favicon">
            <img alt="mongodb" src={mongodb} />
          </a>
          <a target="_blank" href="https://github.com/mywei1989/blog_react" className="favicon">
            <img alt="github" src={github} />
          </a>
        </div>
        <div>博客内容如无特殊说明均为原创，并使用
          <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/">CC BY-NC-SA 3.0</a>
            授权发布。
        </div>
      </div>
    )
  }
}

export default Copyright;