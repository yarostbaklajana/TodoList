const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context: path.join(__dirname, "/src"),
    entry: ["./app"],

    output: {
        path: path.join(__dirname, "/build"),
        filename: "[name].js",
        publicPath: "/"
    },

    resolve: {
        extensions: ["", ".js"],
        modulesDirectories: ["node_modules"]
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css', 'sass'])
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
