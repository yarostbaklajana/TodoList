const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context: path.join(__dirname, "/src"),
    entry: ["./app"],
    output: {
        path: path.join(__dirname, "/build"),
        filename: "app.js",
        publicPath: process.env.WEBPACK_PUBLIC_PATH || "/"
    },
    resolve: {
        extensions: ["", ".js", ".scss"],
        modulesDirectories: ["node_modules"],
        root: [path.resolve('./node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css'])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css', 'sass'])
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url?limit=8192&name=assets/[name].[ext]'            
            },
            {
                test: /\.js$/,
                loader: 'babel', 
                exclude: path.join(__dirname, 'node_modules/'),
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        }),

        new ExtractTextPlugin("style.css")
    ]
};
