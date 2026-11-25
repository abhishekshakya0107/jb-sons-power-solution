import mongoose from 'mongoose';

const quotationSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    workItem: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    quantity: {
      type: Number,
      default: 1,
    },
    unit: {
      type: String,
      default: 'Project',
    },
    rate: {
      type: Number,
      default: 0,
    },
    amount: {
      type: Number,
      default: 0,
    },
    materialCost: {
      type: Number,
      default: 0,
    },
    labourCost: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    tax: {
      type: Number,
      default: 0,
    },
    grandTotal: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['Draft', 'Sent', 'Approved', 'Rejected'],
      default: 'Draft',
    },
  },
  { timestamps: true }
);

const Quotation = mongoose.model('Quotation', quotationSchema);

export default Quotation;
