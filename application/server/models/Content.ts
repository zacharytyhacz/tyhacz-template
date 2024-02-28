import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['video', 'document', 'quiz'], // Assuming these are the types of content
  },
  content: {
    type: String,
    required: true,
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section', // Assuming there is a Section model or it will be part of the Class model
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

export const Content = mongoose.model('Content', contentSchema);
