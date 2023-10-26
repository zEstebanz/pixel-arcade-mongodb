// models/turno.js

import mongoose from 'mongoose';

const TurnoSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  opcion: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Turno || mongoose.model('Turno', TurnoSchema);