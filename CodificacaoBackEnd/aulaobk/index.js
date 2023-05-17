const express = require('express');

const server = express();

server.use(express.json());

server.use((req, res, next) => {
    console.log("Requisição chamada!");
    return next();
})

function checkCurso(req, res, next){
    if(!req.body.name){
        return res.status(400).json({error : "Nome do curso obrigatório!"});
    }
    return next();
}

function checkIndexCurso(req, res, next){
    if(!cursos[req.params.index]){
        return res.status(400).json({error : "Index inexistente!"});
    }
    return next();
}

// query params = ?nome=Leticia
// route params = curso/1
// request Body = {nome: 'NodeJs, tipo: 'BackEnd'}
const cursos = ['NodeJs', 'PHP', 'Java'];

//listagem de todos os cursos
server.get('/cursos', (req,res) =>{
    return res.json(cursos);
})

//listagem de um curso
server.get('/cursos/:index', checkIndexCurso, (req, res) => { //buscando os dados na API
    const {index} = req.params;
    //return res.json({curso: `Aprendendo ${nome}`});
    //return res.send("Hello world");
    //const {nome} = req.query;
    return res.json(cursos[index]);
})

//criar um curso
server.post('/cursos', checkCurso, (req, res) => {
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
})

//alterar um curso
server.put('/cursos/:index', (req, res) => { 
    const {index} = req.params;
    const {name} = req.body;
    cursos[index] = name;
    return res.json(cursos);
})

//deletar um curso
server.delete('/cursos/:index', (req, res) => {
    const {index} = req.params;
    cursos.splice(index, 1);
    return res.json(cursos);
})

server.listen(3000);