const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  plate: { type: String, required: true, unique: true },
  entryTime: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model('Car', carSchema);
