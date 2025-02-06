import mongoose, { Schema, Document } from "mongoose";

interface ITask extends Document {
  title: string;
  completed: boolean;
  priority?: "Low" | "Medium" | "High";
}

const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
});

export const TaskModel = mongoose.model<ITask>("Task", TaskSchema);