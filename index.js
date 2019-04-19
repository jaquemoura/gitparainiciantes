const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.status(200).send({ message: 'Olá mundo esse é meu novo repositorio clonado.'})
});

app.get('/ola', (req, res) => {
    res.status(200).send({ message: 'Olá'});
})

app.listen(4001, () => {
    console.log()'Api inicializado na porta 4001');
}