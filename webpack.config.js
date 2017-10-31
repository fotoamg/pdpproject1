var path = require('path');

module.exports = {
    entry: './assets/js/script1.js',
    output: {
        path: path.resolve(__dirname, '/public/js/'),
        publicPath : '/public/js/',
        filename : 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};