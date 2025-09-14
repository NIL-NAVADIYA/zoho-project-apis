import express from "express";
import {
  listProjects,
  createProject,
  getZohoProjectDetails,
  updateZohoProject,
  // deleteZohoProject,
} from "./projects.controller";

const projectRouter = express.Router();

// Project routes
projectRouter.get("/", listProjects);
projectRouter.get("/:portalId/:projectId", getZohoProjectDetails);
projectRouter.post("/:portalId", createProject);
projectRouter.put("/:portalId/:projectId", updateZohoProject);
// projectRouter.delete("/:portalId/:projectId", deleteZohoProject);

export default projectRouter;
