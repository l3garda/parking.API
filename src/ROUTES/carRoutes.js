const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// CRUD Operations
router.post('/add', async (req, res) => {
  const { plate } = req.body;

  try {
    const carsCount = await Car.countDocuments();
    if (carsCount >= 5) return res.status(400).json({ message: 'No hay cupos disponibles para carros' });

    const newCar = new Car({ plate });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Other routes (GET, PUT, DELETE)
module.exports = router;
