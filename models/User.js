import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please provide name'], minlength: 3, maxlength: 20, trim: true },
  email: { type: String, required: [true, 'Please provide email'], validate: { validator: validator.isEmail, message: 'Please provide a valid email' }, unique: true },
  password: { type: String, required: [true, 'Please provide password'], minlength: 6, select: false },
  lastName: { type: String, trim: true, maxlength: 20, default: 'lastName' },
  location: { type: String, trim: true, maxlength: 20, default: 'my city' },
  isAdmin: { type: Boolean, default: false },
  isPartner: { type: Boolean, default: false },
  isPartnerAdmin: { type: Boolean, default: false },
  partner: { name: String, logo: String, description: String, company: String, rating: { type: Number, default: 0, required: true }, numReviews: { type: Number, default: 0, required: true } },
  messages: [messageSchema],
})

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths())
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({
    userId: this._id,
    name: this.name,
    email: this.email,
    partnerName: this.partner.name,
    isAdmin: this.isAdmin,
    isPartner: this.isPartner
  },
    process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

export default mongoose.model('User', UserSchema)
