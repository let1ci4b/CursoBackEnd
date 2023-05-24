const express = require('express'); 
const router = express.Router(); 
const controller = require('./controller'); 
router.get('/vehicles', controller.getVehicles); router.get('/vehicles/:placa', controller.getVehicleByPlaca); router.post('/vehicles', controller.createVehicle); router.put('/vehicles/:placa', controller.updateVehicle); router.delete('/vehicles/:placa', controller.deleteVehicle); 
module.exports = router;
