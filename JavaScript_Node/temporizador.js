const schedule = require('node-schedule');
//*/de x segundos em x segundos * na hora y * no mês z * no dia da semana w (de 0 a 5)
//Os dias da semana são númerados de 0 a 5 começandp pelo Domingo
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 5', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds());
});

setTimeout(function() {
    tarefa1.cancel(); //Função para cancelar um temporizador criado a partir do schedule
    console.log('Cancelando trefa 1!');
}, 20000);

const regra = new schedule.RecurrenceRule();
//Regra que define a execução no intervalo de segunda a sexta na hora do dia 16 e no segundo 30 de cada minuto
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 16;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds());
});