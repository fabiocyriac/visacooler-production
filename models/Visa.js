import mongoose from 'mongoose'

const VisaSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, 'Please provide country'],
      maxlength: 50,
    },
    status: {
      type: String,
      enum: ['interview', 'approved', 'pending'],
      default: 'pending',
    },
    visaType: {
      type: String,
      enum: ['student-visa', 'dependent-visa', 'visitor-visa', 'work-visa'],
      default: 'full-time',
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Visa', VisaSchema)
