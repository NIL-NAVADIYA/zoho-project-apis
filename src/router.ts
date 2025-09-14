import { Router } from "express";
import projectRouter from "./api/projects/project.routes";

const router = Router();

router.use("/project", projectRouter);

export default router;
