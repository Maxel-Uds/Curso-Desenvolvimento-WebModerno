const anonimo = process.argv.indexOf('-a') !== -1;
//console.log(anonimo);


//process.stdout (saída padrão) - standart out
//process.stdin (entrada padrão) - standart i
//process.exit() -> interrompe um processo
//process.stdin.on('data', function) -> entrada padrão de dados no envento 'on data', que ocorre quando o usuário aperta enter
if(anonimo)
{
    process.stdout.write('Fala anônimo!\n');
    process.exit();
}
else
{
    process.stdout.write('Infome o seu nome: ');
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '');
        process.stdout.write(`Fala ${nome}!!\n`);
        process.exit();
    })
}