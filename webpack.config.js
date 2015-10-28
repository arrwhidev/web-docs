var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                query: {stage: 0},
                exclude: /node_modules/
            },{
                test: /\.scss$/,
                loaders: ['style','css','sass']
            }
        ]
    }
};
