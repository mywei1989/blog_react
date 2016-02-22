var express = require('express');
var rewrite = require('express-urlrewrite');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var WebpackConfig = require('./webpack.config');

var app = express()

/*app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  //publicPath: '/__build__/',
  stats: {
    colors: true
  }
}));*/

var fs = require('fs');
var path = require('path');
var aa = fs.readdirSync(__dirname).reduce(function (entries, dir) {
  console.log(dir);
  //console.log(path.join(__dirname, dir));
    if (fs.statSync(path.join(__dirname, dir)).isDirectory()){
      entries[dir] = path.join(__dirname, dir, 'app.js');
    } 
    //console.log(entries);
    return entries;
});
//console.log(aa);


app.use(rewrite('/about', '/index.html'));
app.use(rewrite('/profile', '/index.html'));
app.use(rewrite('/user/bob', '/index.html'));


app.use(express.static(__dirname));

app.listen(3002, function () {
  /*console.log('Server listening on http://localhost:3002, Ctrl+C to stop');
  console.log(__dirname);*/
});
