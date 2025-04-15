import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditBookForm() {
  const { id } = useParams();  // Captura o ID da URL
  const [book, setBook] = useState(null);

  // Faz a requisição para o controller para buscar o livro pelo ID
  useEffect(() => {
    const fetchBook = async () => {
      try {
        // Aqui você faz a requisição para o seu backend, passando o ID
        const response = await fetch(`/api/livros/${id}`); // Exemplo de endpoint
        const data = await response.json();
        setBook(data); // Atualiza o estado com o livro recebido
      } catch (error) {
        console.error('Erro ao buscar livro:', error);
      }
    };

    fetchBook();
  }, [id]);  // Vai chamar novamente sempre que o ID mudar

  if (!book) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Editar Livro</h2>
      <p>Editar o livro com ID: {id}</p>
      <div>
        <h3>{book.titulo}</h3>
        <p>{book.autor}</p>
        <p>{book.ano}</p>
        <p>{book.status}</p>
        {/* Aqui você pode adicionar o formulário de edição */}
      </div>
    </div>
  );
}

export default EditBookForm;
