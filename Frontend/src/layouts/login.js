import React, { useState } from 'react';
import axios from 'axios';

function CrearUsuario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/usuarios', { nombre, correo })
      .then((response) => {
        console.log('Usuario creado:', response.data);
      })
      .catch((error) => {
        console.error('Error al crear el usuario:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      </label>
      <br />
      <label>
        Correo:
        <input type="text" value={correo} onChange={(event) => setCorreo(event.target.value)} />
      </label>
      <br />
      <button type="submit">Crear usuario</button>
    </form>
  );
}

export default CrearUsuario;
