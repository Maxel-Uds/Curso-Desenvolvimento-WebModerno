const webpack = require('webpack');
const miniCssExtract = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new miniCssExtract({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                miniCssExtract.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url()...
            ]
        }]
    }
}