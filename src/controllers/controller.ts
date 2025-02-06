import { Request, Response } from "express";
import { Services } from "../services/service";

const services = new Services();

export const todoController = {
  getAllTasks: async (req: Request, res: Response) => {
    try {
      const tasks = await services.getAllTasks();
      res.render("index", { tasks });
    } catch (error) {
      console.log(error);
    }
  },
  addTask: async (req: Request, res: Response) => {
    try {
      const { title, priority } = req.body;
      const validatedPriority = ["Low", "Medium", "High"].includes(priority)
        ? priority
        : undefined;
      await services.addTask(title, validatedPriority);
      res.redirect("/");
    } catch (error) {
      console.error(error);
    }
  },
  toggleTask: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await services.toggleTask(id);
      res.redirect("/");
    } catch (error) {
      console.error(error);
    }
  },
  deleteTask: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await services.deleteTask(id);
      res.redirect("/");
    } catch (error) {
      console.error(error);
    }
  },
};