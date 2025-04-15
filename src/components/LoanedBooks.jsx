import React from 'react';

function LoanedBooks({ books }) {
  const emprestados = books.filter(b => b.status.toLowerCase() === 'emprestado');

  return (
    <div className="card">
      <h2>Emprestado</h2>
      <input type="text" placeholder="Emprestado" />
      <button>Emprestado</button>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {emprestados.map((b) => (
            <tr key={b.id}>
              <td>{b.titulo}</td>
              <td>{b.autor}</td>
              <td>{b.ano}</td>
              <td>Editar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanedBooks;
