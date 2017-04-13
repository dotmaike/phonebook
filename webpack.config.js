const path = require('path');
var PATHS = {
    src: path.join(__dirname + './src'),
    dist: path.join(__dirname + './dist')
};
module.exports = {
    entry: {
        bundle: [PATHS.src + '/index.js']
    },
    output: {
        path: PATHS.dist,
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: [
                path.resolve(__dirname, 'app')
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'bower_components')
            ],
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css']
    },
    devtool: 'source-map'
};