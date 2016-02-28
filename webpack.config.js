var path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.css','.png','.jpg']
    },
    module: {
        loaders: [
          {test: /\.js?$/,loaders: ['babel-loader?presets[]=es2015&presets[]=react'],include: path.join(__dirname, '.')},
          {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
          {test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
}

