import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function Form() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      id: id,
      nome: nome,
      idade: idade
    };
    axios.post('http://localhost:3002/inserir', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    
    
    <form onSubmit={handleSubmit}>
      <div className='inicio'>
      <label>
        <h1>ID:</h1>
        <input className="input" type="text" value={id} onChange={e => setId(e.target.value)} />
      </label>
      <br />
      <label>
      <h1>Nome:</h1>
        <input className="input" type="text" value={nome} onChange={e => setNome(e.target.value)} />
      </label>
      <br />
      <label>
      <h1>Idade:</h1>
        <input className="input" type="text" value={idade} onChange={e => setIdade(e.target.value)} />
      </label>
      <br />
      <button className="button" type="submit">Cadastrar</button>
      </div>
      
    </form>
  );
}

export default Form;
