import { TaskModel } from "../models/todo";
import { RegularTask, PriorityTask } from "../models/task";

export class Services {
  async addTask(
    title: string,
    priority?: "Low" | "Medium" | "High"
  ): Promise<void> {
    const task = new TaskModel({
      title,
      priority,
      completed: false,
    });
    await task.save();
  }
  async toggleTask(id: string): Promise<void> {
    const task = await TaskModel.findById(id);
    if (task) {
      task.completed = !task.completed;
      await task.save();
    }
  }
  async getAllTasks(): Promise<
    Array<{ id: string; title: string; completed: boolean; priority?: string; status: string }>
  > {
    const tasks = await TaskModel.find().lean();
    return tasks.map((task) => {
      const baseTask = task.priority
        ? new PriorityTask(
          task._id.toString(),
          task.title,
          task.completed,
          task.priority
        )
        : new RegularTask(task._id.toString(), task.title, task.completed);
      return {
        ...baseTask.getDetails(),
        priority: task.priority || undefined,
        status: baseTask.getStatus(),
      };
    });
  }

  async deleteTask(id: string): Promise<void> {
    await TaskModel.findByIdAndDelete(id);
  }
}