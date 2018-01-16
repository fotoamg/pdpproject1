const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */ /* Configure manualy here for prod or dev etc. env... or use the npm way */
const ENV = 'DEV'; /*process.env.npm_lifecycle_event;*/
const isProd = ENV === 'build';

const webpackConfig =  {
    entry: {
        core: './src/js/core.js',
        vendor: ["angular"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        /* publicPath : '/dist',*/

        // Filename for entry points
        // Only adds hash in build mode
        filename: isProd ? '[name].[hash].js' : '[name].bundle.js',

        // Filename for non-entry points
        // Only adds hash in build mode
        chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]

            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })

            },
            {   
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000' 
            },
            { 
                test: /bootstrap\/dist\/js\/umd\//, 
                loader: 'imports?jQuery=jquery' 
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            /*{
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './',
                            publicPath: './'
                        }
                    }
                ]
            },*/
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: './'
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin(
            {
                name: "vendor",
                filename: isProd ? '[name].[hash].js' : '[name].js',
                minChunks: Infinity
            }
        ),
        new CopyWebpackPlugin([
            {from:'src/static', to:'static'}
        ]),
        new CleanWebpackPlugin(['dist']),
            new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
    ]
};

if (isProd) {
    webpackConfig.plugins.push(
        // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
        // Only emit files when there are no errors
        new webpack.NoErrorsPlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
        // Minify all javascript, switch loaders to minimizing mode
        new webpack.optimize.UglifyJsPlugin()
    )
}



module.exports = webpackConfig;
