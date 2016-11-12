var _ = require('lodash');
var baseConfig = require('./base.config');
var path = require('path');
var webpack = require('webpack');


var config = _.merge(baseConfig, {
    devtool: 'eval',
    entry:[
        'webpack-dev-server/client?http://localhost:3000',
        './client/src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './web/build'),
        publicPath: 'build/',
        filename: 'bundle.js',
        pathinfo: true,
    },
    devServer: {
        contentBase: './client/web',
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        //
    ].concat(baseConfig.plugins),

});

module.exports = config ;