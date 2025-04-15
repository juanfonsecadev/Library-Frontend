import React, { useState } from 'react';
import axios from 'axios';

function AddBookForm({ onBookAdded }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = async () => {
    await axios.post('/api/books', { titulo, autor, ano });
    setTitulo('');
    setAutor('');
    setAno('');
    onBookAdded();
  };

  return (
    <div className="card">
      <h2>Adicionar Novo Livro</h2>
      <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" />
      <input value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor" />
      <input value={ano} onChange={(e) => setAno(e.target.value)} placeholder="Ano de Publicação" />
      <button onClick={handleSubmit}>Salvar</button>
    </div>
  );
}

export default AddBookForm;
