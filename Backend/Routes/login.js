const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Definimos una ruta POST para manejar el inicio de sesión
router.post('/login', authController.login);

// Definimos una ruta POST para manejar el registro de usuarios
router.post('/register', authController.register);

module.exports = router;
