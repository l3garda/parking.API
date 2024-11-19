require('dotenv').config();
const express = require('express');
const mongoose = require('./database');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');
const motorcycleRoutes = require('./routes/motorcycleRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/cars', carRoutes);
app.use('/api/motorcycles', motorcycleRoutes);

// Swagger Docs
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = { /* Configuración de Swagger */ };
const specs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
