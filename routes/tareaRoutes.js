const express = require('express');
const router = express.Router();

const tareaController = require('../controllers/tareacontrollers');

router.get('/tareas', tareaController.listarTarea)

router.post('/tareas', tareaController.newTarea)

module.exports = router;