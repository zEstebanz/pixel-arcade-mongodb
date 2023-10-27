// models/turno.js

import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Games || mongoose.model('Games', GameSchema);