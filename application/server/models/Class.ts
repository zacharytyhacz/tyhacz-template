import mongoose from 'mongoose';
import { Content } from './Content'; // This will be created in a subsequent step

const classSchema = new mongoose.Schema({
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  sections: [{
    title: { type: String, required: true },
    content: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content',
    }],
  }],
}, {
  timestamps: true,
  versionKey: false,
});

export const Class = mongoose.model('Class', classSchema);
