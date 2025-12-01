import mongoose, { Document, Schema } from 'mongoose';

export interface IComment extends Document {
  taskId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  content: string;
  timestamp: Date;
}

const CommentSchema = new Schema({
  taskId: {
    type: Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Missing validation for empty content
// Missing cascade delete when task is deleted

export default mongoose.model<IComment>('Comment', CommentSchema);