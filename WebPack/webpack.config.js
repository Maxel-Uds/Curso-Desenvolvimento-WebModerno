const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const miniCssExtract = require('mini-css-extract-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new optimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new miniCssExtract({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                miniCssExtract.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url()...
                'sass-loader'
            ]
        }]
    }
}