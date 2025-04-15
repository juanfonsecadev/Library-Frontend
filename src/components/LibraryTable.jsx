import React from 'react';

function LibraryTable({ books, onEdit, searchTerm, setSearchTerm }) {
  return (
    <div className="card">
      <h2>Biblioteca</h2>
      <div>
        <input
          type="text"
          placeholder="Buscar por título, autor ou ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Buscar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Ano</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id} onClick={() => onEdit(b)}>
              <td>{b.titulo}</td>
              <td>{b.autor}</td>
              <td>{b.ano}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LibraryTable;
