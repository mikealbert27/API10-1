const express = require('express');
const router = express.Router();
const carController = require('../controllers/car.controller');

// Controlador


router.get('/', carController.getCars);
router.post('/', carController.addCar);
// router.put('/',);
router.delete('/:id', carController.deleteCar);

module.exports = router;