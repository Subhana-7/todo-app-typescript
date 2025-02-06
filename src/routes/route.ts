import express from "express";
import { todoController } from "../controllers/controller";
const router = express.Router();

router.get("/", todoController.getAllTasks);
router.post("/addTask", todoController.addTask);
router.post("/toggle/:id", todoController.toggleTask);
router.post("/delete/:id", todoController.deleteTask);

export default router;