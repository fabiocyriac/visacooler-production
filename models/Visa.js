import mongoose from 'mongoose'

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

const VisaSchema = new mongoose.Schema(
  {
    country: { type: String, required: [true, 'Please provide country'], maxlength: 50 },
    partner: { type: mongoose.Types.ObjectId, ref: 'User', required: [true, 'Please provide partner'] },
    status: { type: String, enum: ['interview', 'approved', 'pending'], default: 'pending' },
    visaType: { type: String, enum: ['student-visa', 'dependent-visa', 'visitor-visa', 'work-visa'], default: 'full-time' },
    company: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    price: { type: Number, required: false },
    rating: { type: Number, required: false },
    numReviews: { type: Number, required: false },
    reviews: [reviewSchema],
  },
  { timestamps: true }
)

export default mongoose.model('Visa', VisaSchema)
