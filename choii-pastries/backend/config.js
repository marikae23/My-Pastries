// backend/config.js

module.exports = {
    jwtSecret: 'secretojwt',  // Chave secreta para assinar tokens JWT (deve ser alterada em produção)
    dbUrl: 'mongodb://localhost:27017/recipesApp',  // URL de conexão com o MongoDB
  };
  