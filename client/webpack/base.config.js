var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;

var rootDir = path.resolve(__dirname, '../../');

var node_modules = path.resolve(rootDir, 'node_modules');

module.exports = {
    context: rootDir,
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: [
                    'babel'
                ],
                query: {
                    'presets': ['es2015', 'stage-0', 'react'],
                },
                exclude: [
                    /node_modules/,
                ]
            },
            {
                test: /\.css/,
                loader: 'style!css'

            },
        ],
    },
    plugins:[]
};