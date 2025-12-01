import mongoose, { Document, Schema } from 'mongoose';

// Task interface
export interface ITask extends Document {
  title: string;
  description?: string;
  status: string;
  priority?: string;
  assigneeId?: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
  dueDate?: Date;
  tags?: string[];
  created_at: Date;
  updated_at: Date;
}

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  status: {
    type: String,
    default: 'pending'
  },
  priority: String,
  assigneeId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dueDate: Date,
  tags: [String],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// TODO: Add validation for status values
// TODO: Add indexes for performance
// TODO: Add pre-update hook to update updated_at

export default mongoose.model<ITask>('Task', TaskSchema);