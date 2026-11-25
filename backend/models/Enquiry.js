import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    projectType: {
      type: String,
      required: true,
    },
    serviceRequired: {
      type: String,
      required: true,
    },
    approximateArea: {
      type: String,
      default: '',
    },
    preferredDate: {
      type: String,
      default: '',
    },
    projectRequirement: {
      type: String,
      required: true,
    },
    additionalNotes: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Quotation Sent', 'Closed'],
      default: 'New',
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;
