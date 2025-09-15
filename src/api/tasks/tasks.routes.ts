import express from "express";
import {
  listTasks,
  createTaskController,
  getTaskDetails,
  updateTaskController,
  deleteTaskController,
} from "../tasks/tasks.controller";

const taskRouter = express.Router();

taskRouter.get("/", listTasks);
taskRouter.get("/:portalId/:projectId/:taskId", getTaskDetails);
taskRouter.post("/:portalId/:projectId", createTaskController);
taskRouter.put("/:portalId/:projectId/:taskId", updateTaskController);
taskRouter.delete("/:portalId/:projectId/:taskId", deleteTaskController);

export default taskRouter;
