import mongoose from 'mongoose'

const PartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide partnerName'],
      maxlength: 50,
    },
    logo: {
      type: String,
      maxlength: 100,
    },
    description: {
      type: String,
      maxlength: 100,
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

export default mongoose.model('Partner', PartnerSchema)
