import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';  // Página de registro (criar conta)

// Função para verificar se o usuário está autenticado
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;  // Verifica se o token existe
};

function App() {
  useEffect(() => {
    // Aqui você pode verificar o estado do login ao carregar o app, se necessário
  }, []);

  return (
    <Router>
      <Routes>
        {/* Rota para Login */}
        <Route path="/" element={<Login />} />

        {/* Rota para Cadastro */}
        <Route path="/register" element={<Register />} />

        {/* Rota protegida para Home, redireciona se não estiver autenticado */}
        <Route 
          path="/home" 
          element={isAuthenticated() ? <Home /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
