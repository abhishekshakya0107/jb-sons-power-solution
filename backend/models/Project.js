import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    completionDate: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      default: '',
    },
    gallery: [{ type: String }],
    servicesProvided: [{ type: String }],
    featured: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
