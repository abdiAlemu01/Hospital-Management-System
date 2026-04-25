import mongoose from "mongoose";

/* ===================== 1. USER  ===================== */

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true }, 
  role: {
    type: String,
    enum: [],
    required: true,
  },
  phone: { type: String, required: true },
  isActive: { type: Boolean, default: true } 
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

/* ===================== 2. DOCTOR ===================== */
const doctorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, min: 0 },
  department: { type: String, required: true }, // Cardiology, ER, etc.
  schedule: [
    {
      day: { type: String, enum: ["Monday", "Tuesday", "Wednesday", 
          "Thursday", "Friday", "Saturday", "Sunday"] },
      startTime: String, 
      endTime: String,
    }
  ]
}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);

/* ===================== 3. PATIENT ===================== */
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  patientId: { type: String, unique: true }, 
  age: { type: Number, required: true, min: 0, max: 120 },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  phone: { type: String, required: true, unique: true },
  emergencyContact: String,
  bloodGroup: { type: String, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
  address: String,
  medicalHistory: [String], 
}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema);

/* ===================== 4. APPOINTMENT   ===================== */
const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  type: { type: String, enum: ["Checkup", "Follow-up", "Emergency"], default: "Checkup" },
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending",
  }
}, { timestamps: true });

// Indexing for faster calendar lookups
appointmentSchema.index({ date: 1, doctorId: 1 });

export const Appointment = mongoose.model("Appointment", appointmentSchema);

/* ===================== 5. MEDICAL RECORD (Clinical Data) ===================== */
const medicalRecordSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
  vitals: {
    temp: String,
    bp: String, // Blood Pressure
    weight: String,
    pulse: String
  },
  diagnosis: { type: String, required: true },
  prescription: [{ type: mongoose.Schema.Types.ObjectId, ref: "Prescription" }],
  notes: String,
}, { timestamps: true });

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

/* ===================== 6. PHARMACY & INVENTORY ===================== */
const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, unique: true }, // Barcode / Stock code
  quantity: { type: Number, default: 0, min: 0 },
  unit: { type: String, default: "tablet" }, // mg, ml, pcs
  pricePerUnit: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  reorderLevel: { type: Number, default: 10 } // Warning when stock is low
}, { timestamps: true });

export const Inventory = mongoose.model("Inventory", inventorySchema);

/* ===================== 7. BILLING (The Money) ===================== */
const billingSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  items: [
    {
      serviceName: String, // "Doctor Consultation", "Lab Test", "Medicine"
      cost: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ["paid", "unpaid", "pending"], default: "unpaid" },
  paymentMethod: { type: String, enum: ["Cash", "Card", "Insurance", "Mobile Money"] },
}, { timestamps: true });

export const Billing = mongoose.model("Billing", billingSchema);