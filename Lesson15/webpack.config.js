'use strict';

let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'main.js'
    },

    watch: true,
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader?optional[]=runtime',
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                targets: {
                                    edge: "17",
                                    firefox: "68",
                                    chrome: "67",
                                    safari: "11.1",
                                    ie: "11"
                                },
                                useBuiltIns: "usage"
                            }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};