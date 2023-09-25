import mongoose from 'mongoose'
import validator from 'validator'


const PartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide partnerName'],
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
      },
      unique: true,
    },
    company: {
      type: String,
      maxlength: 100,
    },
    phone: {
      type: Boolean,
      required: [true, 'Please provide Phone Number'],
      default: false
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  { timestamps: true }
)

export default mongoose.model('Partner', PartnerSchema)
