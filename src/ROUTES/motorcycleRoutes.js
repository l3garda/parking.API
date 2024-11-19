const express = require('express');
const router = express.Router();
const Motorcycle = require('../models/motorcycle');

// CRUD Operations
router.post('/add', async (req, res) => {
  const { plate } = req.body;

  try {
    const motorcycleCount = await Motorcycle.countDocuments();
    if (motorcycleCount >= 10) return res.status(400).json({ message: 'No hay cupos disponibles para Motos' });

    const newMotorcycle = new Motorcycle({ plate });
    await newMotorcycle.save();
    res.status(201).json(newMotorcycle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Other routes (GET, PUT, DELETE)
module.exports = router;
