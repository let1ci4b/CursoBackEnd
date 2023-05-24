let vehicles = []; 
function getVehicles(req, res) { 
res.json(vehicles); 
} 
function getVehicleByPlaca(req, res) {
const { placa } = req.params; 
const vehicle = vehicles.find(v => v.placa === placa);
if (vehicle) { 
res.json(vehicle); 
} else {
res.status(404).json({ message: 'Veículo não encontrado.' });
} 
} 
function createVehicle(req, res) { 
const { placa, marca, modelo, ano } = req.body; 
const vehicle = { placa, marca, modelo, ano };
vehicles.push(vehicle); 
res.status(201).json({ message: 'Veículo cadastrado com sucesso.' }); 
} 
function updateVehicle(req, res) 
{ const { placa } = req.params; 
const { marca, modelo, ano } = req.body; 
const vehicle = vehicles.find(v => v.placa === placa); 
if (vehicle) { 
vehicle.marca = marca || vehicle.marca; 
vehicle.modelo = modelo || vehicle.modelo; 
vehicle.ano = ano || vehicle.ano; 
res.json({ message: 'Informações do veículo atualizadas com sucesso.' }); 
} else { 
res.status(404).json({ message: 'Veículo não encontrado.' }); 
} 
} function deleteVehicle(req, res) { 
const { placa } = req.params; 
const vehicleIndex = vehicles.findIndex(v => v.placa === placa); 
if (vehicleIndex !== -1) { 
vehicles.splice(vehicleIndex, 1); 
res.json({ message: 'Veículo excluído com sucesso.' }); 
} else { 
res.status(404).json({ message: 'Veículo não encontrado.' }); 
} 
} module.exports = { getVehicles, getVehicleByPlaca, createVehicle, updateVehicle, deleteVehicle };
