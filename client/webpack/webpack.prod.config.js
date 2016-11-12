var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./base.config');


var config = _.merge(baseConfig, {
    entry: {
            bundle: './client/src/index.js'
        },
    output: {
        path: path.resolve(__dirname, '../web/build'),
        publicPath: 'build/',
        filename: 'bundle.js',
        pathinfo: true,
    },
    devtool: 'cheap-module-source-map ',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            minimize: true,
            sourceMap: false,
            exclude: [
                /node_modules/,
                /bower_components/
            ]
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ].concat(baseConfig.plugins)
});

module.exports = config;