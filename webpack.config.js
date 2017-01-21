var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CompressionPlugin = require('compression-webpack-plugin');

var PATHS = {
    src: path.join(__dirname + '/src'),
    build: path.join(__dirname + '/build')
};

var config = {
    entry: {
        bundle: [PATHS.src + '/index.js']
    },
    output: {
        path: PATHS.build,
        filename: '[name].min.js'
    },
    module: {
        preLoaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'source-map'
        }],
        loaders: [{
            test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 3 versions!sass?outputStyle=compressed')
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: require.resolve('react'),
            loader: 'expose?React'
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            title: 'Phonebook',
            template: PATHS.src + '/index.ejs',
            hash: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            exclude: /\.test\.js/i,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new BrowserSyncPlugin({
            proxy: 'localhost:8080'
        }, {
            name: 'bs-instance',
            callback: function() {
                console.log('browserSync started!');
            },
            reload: true
        }),
        new CompressionPlugin({
            asset: 'phonebook.gz',
            algorithm: 'gzip',
            regExp: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    resolve: {
        extensions: ['', '.js', '.es6', 'jsx']
    },
    devServer: {
        contentBase: PATHS.src,
        inline: true,
        stats: 'errors-only'
    }
};

module.exports = config;
