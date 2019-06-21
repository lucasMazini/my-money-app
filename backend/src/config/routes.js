const express = require('express');
const auth = require('./auth');

module.exports = function(server) {
    /* Rotas Protegidas */
    const protectedApi = express.Router();
    server.use('/api', protectedApi);

    protectedApi.use(auth);

    /* Rotas Desprotegidas */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const AuthService = require('../api/users/authService');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
};