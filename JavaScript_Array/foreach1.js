const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

//O índice é sempre passado como segundo parâmetro, o próprio array pode ser passado como terceiro parâmetro
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
});

aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);