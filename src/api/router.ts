import { Router } from "express";
import projectRouter from "./projects/project.routes";
import taskRouter from "./tasks/tasks.routes";

const router = Router();

router.use("/project", projectRouter);
router.use("/tasks", taskRouter);

export default router;
