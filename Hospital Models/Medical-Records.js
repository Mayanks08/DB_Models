const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Patient schema
const PatientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  contact: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true }
    }
  }
});

// Define the MedicalHistory schema
const MedicalHistorySchema = new Schema({
  conditions: [{ type: String }],
  allergies: [{ type: String }],
  surgeries: [{ type: String }],
  familyHistory: [{ type: String }]
});

// Define the Prescription schema
const PrescriptionSchema = new Schema({
  medicationName: { type: String, required: true },
  dosage: { type: String, required: true },
  frequency: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date }
});

// Define the Visit schema
const VisitSchema = new Schema({
  date: { type: Date, required: true },
  doctor: { type: String, required: true },
  reason: { type: String, required: true },
  notes: { type: String },
  prescriptions: [PrescriptionSchema]
});

// Define the MedicalRecord schema
const MedicalRecordSchema = new Schema({
  patient: { type: PatientSchema, required: true },
  medicalHistory: { type: MedicalHistorySchema, required: true },
  visits: [VisitSchema]
});

module.exports = mongoose.model('MedicalRecord', MedicalRecordSchema);
