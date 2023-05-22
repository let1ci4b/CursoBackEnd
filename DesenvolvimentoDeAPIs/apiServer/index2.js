const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let enderecos = [];

app.get('/enderecos', (req, res) => {
    res.json(enderecos);
});

app.get('/enderecos/:cep', (req, res) => {
    const { cep } = req.params;
    const endereco = enderecos.find(v => v.cep === cep);
    if (endereco) {
        res.json(endereco);
    } else {
        res.status(404).json({ message: 'CEP não encontrado.' });
    }
});

app.post('/enderecos', (req, res) => {
    const { nome, cep, rua, bairro, cidade, estado, pais } = req.body;
    const endereco = { nome, cep, rua, bairro, cidade, estado, pais };
    enderecos.push(endereco);
    res.status(201).json({ message: 'Endereço cadastrado com sucesso.' });
});

app.put('/enderecos/:cep', (req, res) => {
    const { cep } = req.params;
    const { nome, rua, bairro, cidade, estado, pais } = req.body;
    const endereco = enderecos.find(v => v.cep === cep);
    if (endereco) {
        endereco.nome = nome || endereco.nome;
        endereco.rua = rua || endereco.rua;
        endereco.bairro = bairro || endereco.bairro;
        endereco.cidade = cidade || endereco.cidade;
        endereco.estado = estado || endereco.estado;
        endereco.pais = pais || endereco.pais;
        res.json({ message: 'Informações do CEP atualizadas com sucesso.' });
    } else {
        res.status(404).json({ message: 'CEP não encontrado.' });
    }
});

app.delete('/enderecos/:cep', (req, res) => {
    const { cep } = req.params;
    const endereco = enderecos.findIndex(v => v.cep === cep);
    if (endereco !== -1) {
        enderecos.splice(endereco, 1);
        res.json({ message: 'Endereço excluído com sucesso.' });
    } else {
        res.status(404).json({ message: 'CEP não encontrado.' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

