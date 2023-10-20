import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        visa: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Visa',
          required: true,
        },
      },
    ],
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    partner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('Order', OrderSchema)


