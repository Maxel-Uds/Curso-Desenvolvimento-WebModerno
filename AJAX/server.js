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

app.listen(8080, () => console.log('Executando...'));