const express = require('express'); 
const router = express.Router(); 
const controller = require('./controller'); 
router.get('/pessoas', controller.getPessoas); router.get('/pessoas/:cpf', controller.getPessoaByCpf); router.post('/pessoas', controller.createPessoa); router.put('/pessoas/:cpf', controller.updatePessoa); router.delete('/pessoas/:cpf', controller.deletePessoa); 
module.exports = router;
