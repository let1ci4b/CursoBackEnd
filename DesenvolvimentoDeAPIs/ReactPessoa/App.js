import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [pessoas, setPessoas] = useState([]);
  const [formData, setFormData] = useState({
    cpf: '',
    sexo: '',
    nacionalidade: '',
    dataNascimento: ''
  });

  useEffect(() => {
    // Carrega as pessoas ao montar o componente
    fetchPessoas();
  }, []);

  const fetchPessoas = async () => {
    try {
      // Faz uma requisição GET para obter a lista de pessoas
      const response = await axios.get(`http://localhost:3000/pessoas`);
      // Atualiza o estado com as pessoas obtidas
      setPessoas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = e => {
    // Atualiza o estado do formulário quando o valor de um input é alterado
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreatePessoa = async e => {
    e.preventDefault();
    try {
      // Faz uma requisição POST para criar uma nova pessoa
      await axios.post(`http://localhost:3000/pessoas`, formData);
      // Limpa o formulário após o cadastro
      setFormData({
        cpf: '',
        sexo: '',
        nacionalidade: '',
        dataNascimento: ''
      });
      // Atualiza a lista de pessoas
      fetchPessoas();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePessoa = async cpf => {
    try {
      // Faz uma requisição PUT para atualizar as informações de uma pessoa
      await axios.put(`http://localhost:3000/pessoas/${cpf}`, formData);
      // Limpa o formulário após a atualização
      setFormData({
        cpf: '',
        sexo: '',
        nacionalidade: '',
        dataNascimento: ''
      });
      // Atualiza a lista de veículos
      fetchPessoas();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePessoa = async cpf => {
    try {
      // Faz uma requisição DELETE para excluir um veículo
      await axios.delete(`http://localhost:3000/pessoas/${cpf}`);
      // Atualiza a lista de veículos
      fetchPessoas();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>&emsp;Pessoas</h1>
      <form onSubmit={handleCreatePessoa}>
        <label>
          &emsp;&emsp;CPF:&ensp;
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
          />
        </label>
        <label>
          &emsp;Sexo:&ensp;
          <input
            type="text"
            name="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          &emsp;Nacionalidade:&ensp;
          <input
            type="text"
            name="nacionalidade"
            value={formData.nacionalidade}
            onChange={handleInputChange}
          />
        </label>
        <label>
          &emsp;Data de nascimento:&ensp;
          <input
            type="text"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleInputChange}
          />
        </label>&emsp;
        <button type="submit">Cadastrar</button>
      </form>
      <ul>
        {pessoas.map(pessoa => (
          <li key={pessoa.cpf}>
            {pessoa.cpf} - {pessoa.sexo} - {pessoa.nacionalidade} - {pessoa.dataNascimento}
            <button onClick={() => handleUpdatePessoa(pessoa.cpf)}>Atualizar</button>
            <button onClick={() => handleDeletePessoa(pessoa.cpf)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
