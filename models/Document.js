import mongoose from 'mongoose'


const DocumentSchema = new mongoose.Schema(
  {
    file_name: { type: String },
    file_type: { type: String, unique: true  },
    file_url: { type: String },
    uploaded_by: { type: mongoose.Types.ObjectId, ref: 'User' },
    uploaded_on: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export default mongoose.model('Document', DocumentSchema)
