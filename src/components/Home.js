import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Home.css'; // App.css provavelmente está na pasta src
import LibraryTable from './LibraryTable';
import AddBookForm from './AddBookForm';
import EditBookForm from './EditBookForm';
import LoanedBooks from './LoanedBooks';

function Home() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Função para buscar livros
  const fetchBooks = async () => {
    try {
      const res = await axios.get('/api/books'); // Endpoint do seu backend
      setBooks(res.data);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  // Função para filtrar os livros com base no termo de busca
  const filterBooks = (books) => {
    return books.filter((book) =>
      book.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.autor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.id.toString().includes(searchTerm) // Busca também pelo ID
    );
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <div className="grid">
        {/* Container de Biblioteca com busca */}
        <LibraryTable 
          books={filterBooks(books)} 
          onEdit={setEditingBook} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        
        {/* Formulário para adicionar livro */}
        <AddBookForm onBookAdded={fetchBooks} />

        {/* Formulário para editar livro */}
        {editingBook && (
          <EditBookForm 
            book={editingBook} 
            onCancel={() => setEditingBook(null)} 
            onSaved={fetchBooks} 
          />
        )}

        {/* Lista de livros emprestados */}
        <LoanedBooks books={books} />
      </div>
    </div>
  );
}

export default Home;
