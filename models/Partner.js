import mongoose from 'mongoose'
import validator from 'validator'

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const PartnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Please provide partnerName'], maxlength: 50 },
    email: { type: String, required: [true, 'Please provide email'], validate: { validator: validator.isEmail, message: 'Please provide a valid email' }, unique: true },
    company: { type: String, maxlength: 100 },
    logo: { type: String },
    description: { type: String, maxlength: 100 },
    phone: { type: Number, required: [true, 'Please provide Phone Number'], default: false },
    status: { type: String, required: true, default: "pending" },
    rating: { type: Number, default: 0, required: true },
    numReviews: { type: Number, default: 0, required: true },
    reviews: [reviewSchema]
  },
  { timestamps: true }
)

export default mongoose.model('Partner', PartnerSchema)
