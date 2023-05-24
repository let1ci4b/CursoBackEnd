let pessoas = []; 
function getPessoas(req, res) { 
res.json(pessoas); 
} 
function getPessoaByCpf(req, res) {
const { cpf } = req.params; 
const pessoa = pessoas.find(v => v.cpf === cpf);
if (pessoa) { 
res.json(pessoa); 
} else {
res.status(404).json({ message: 'Pessoa não encontrada.' });
} 
} 
function createPessoa(req, res) { 
const { cpf, sexo, nacionalidade, dataNascimento } = req.body; 
const pessoa = { cpf, sexo, nacionalidade, dataNascimento };
pessoas.push(pessoa); 
res.status(201).json({ message: 'Pessoa cadastrada com sucesso.' }); 
} 
function updatePessoa(req, res) 
{ const { cpf } = req.params; 
const { sexo, nacionalidade, dataNascimento } = req.body; 
const pessoa = pessoas.find(v => v.cpf === cpf); 
if (pessoa) { 
pessoa.sexo = sexo || pessoa.sexo; 
pessoa.nacionalidade = nacionalidade || pessoa.nacionalidade; 
pessoa.dataNascimento = dataNascimento || pessoa.dataNascimento; 
res.json({ message: 'Informações atualizadas com sucesso.' }); 
} else { 
res.status(404).json({ message: 'Pessoa não encontrada.' }); 
} 
} function deletePessoa(req, res) { 
const { cpf } = req.params; 
const pessoaIndex = pessoas.findIndex(v => v.cpf === cpf); 
if (pessoaIndex !== -1) { 
pessoas.splice(pessoaIndex, 1); 
res.json({ message: 'Cadastro excluído com sucesso.' }); 
} else { 
res.status(404).json({ message: 'Pessoa não encontrada.' }); 
} 
} module.exports = { getPessoas, getPessoaByCpf, createPessoa, updatePessoa, deletePessoa };
