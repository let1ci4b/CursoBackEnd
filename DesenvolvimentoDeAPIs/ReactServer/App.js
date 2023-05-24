import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    placa: '',
    marca: '',
    modelo: '',
    ano: ''
  });

  useEffect(() => {
    // Carrega os veículos ao montar o componente
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      // Faz uma requisição GET para obter a lista de veículos
      const response = await axios.get(`http://localhost:3000/vehicles`);
      // Atualiza o estado com os veículos obtidos
      setVehicles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = e => {
    // Atualiza o estado do formulário quando o valor de um input é alterado
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateVehicle = async e => {
    e.preventDefault();
    try {
      // Faz uma requisição POST para criar um novo veículo
      await axios.post(`http://localhost:3000/vehicles`, formData);
      // Limpa o formulário após o cadastro
      setFormData({
        placa: '',
        marca: '',
        modelo: '',
        ano: ''
      });
      // Atualiza a lista de veículos
      fetchVehicles();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateVehicle = async placa => {
    try {
      // Faz uma requisição PUT para atualizar as informações de um veículo
      await axios.put(`http://localhost:3000/vehicles/${placa}`, formData);
      // Limpa o formulário após a atualização
      setFormData({
        placa: '',
        marca: '',
        modelo: '',
        ano: ''
      });
      // Atualiza a lista de veículos
      fetchVehicles();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteVehicle = async placa => {
    try {
      // Faz uma requisição DELETE para excluir um veículo
      await axios.delete(`http://localhost:3000/vehicles/${placa}`);
      // Atualiza a lista de veículos
      fetchVehicles();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Veículos</h1>
      <form onSubmit={handleCreateVehicle}>
        <label>
          Placa:
          <input
            type="text"
            name="placa"
            value={formData.placa}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Marca:
          <input
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Modelo:
          <input
            type="text"
            name="modelo"
            value={formData.modelo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Ano:
          <input
            type="text"
            name="ano"
            value={formData.ano}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.placa}>
            {vehicle.placa} - {vehicle.marca} - {vehicle.modelo} - {vehicle.ano}
            <button onClick={() => handleUpdateVehicle(vehicle.placa)}>Atualizar</button>
            <button onClick={() => handleDeleteVehicle(vehicle.placa)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;