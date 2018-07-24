'use strict';

const NODE_ENV             = process.env.NODE_ENV || 'development';
const path                 = require('path');
const constants            = require("./constants");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');

var customConfiguration = function webpackConfig() {
    var config = {};

    const isProd = NODE_ENV === 'production';
    const outputPath = isProd ? 'dist/prod' : 'dist/dev';

    /* config.context = (__dirname, 'src'); */
    config.entry = './src/js/index.js';

    config.output = {
        path: path.resolve(__dirname, outputPath),
        filename: 'index.js'
        // publicPath: 'pathOrUrlWhenProductionBuild'
    };

    config.watch = !isProd;
    config.devtool = isProd ? false : 'source-map';
    
    /* config.resolve = {
        extensions: ['*','js']
    }; */

    config.module = {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            } /* {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                    //context: path.resolve(__dirname, "img")
                }
            }]
        } */
        ]
    };

    config.plugins = [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),

        new HtmlWebpackPlugin({
            title: constants.HTML_TITLE,
            subTitle: isProd ? 'Production mode' : 'Development mode',
            minify: {
                collapseWhitespace: isProd
            },
            template: 'src/templates/index.html'
        }),

        new CopyWebpackPlugin([
            //{ from: "src/css/index.css" },
            { from: 'src/assets', to: 'assets' },
            //{ from: 'userfiles', to: 'userfiles' }
        ]) 
    ];

    return config;
};

module.exports = customConfiguration;
