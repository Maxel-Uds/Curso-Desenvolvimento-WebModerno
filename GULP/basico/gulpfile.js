const gulp = require('gulp');
const { series } = require('gulp');

function copiar(callback) {
    console.log('Tarefa de copiar!');
    return callback();
}

module.exports.default = series(copiar);