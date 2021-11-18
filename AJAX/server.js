//A versão nova do express utiliza o middleware  de body-parse incorporado dentro de si
//const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
       callback(null, './upload'); 
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage }).single('arquivo');

app.get("/dados/estados.json");
app.post('/upload', (req, res) => {
   upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro')
        }

        res.end('Concluído com sucesso');
   });
});

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    });
});

app.get('/parOuImpar', (req, res) => {
    // Formas de receber dados: 
    // 1 - req.body
    // 2 - req.query(uri?var=valor)
    // 3 - req.params(uri/valor)(back: uri/:var)
    // Query é a requisição padrão? 


    const par = parseInt(req.query.numero) % 2 == 0;
    res.send({
        resultado: par? 'par' : 'impar'
    });

    // Como achei que era
    // const num = parseInt(req.query.numero)
    // if(num % 2 == 0)
    // {
    //     res.send({
    //         resultado: 'par'
    //     });
    // }
    // else
    // {
    //     res.send({
    //         resultado: 'impar'
    //     })
    // }
});

app.listen(8080, () => console.log('Executando...'));