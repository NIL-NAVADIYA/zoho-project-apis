import { NextFunction, Request, Response } from "express";
import {
  deleteProject,
  getProject,
  getProjects,
  updateProject,
  createProject as createProjectService,
} from "./project.service";

export const listProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const portalId = req.params.portalId;
    const oauthToken = (req as any).user.zohoOAuthToken;

    const page = req.params.page || "1";
    const perPage = req.params.per_page || "10";

    const filters = {
      page: parseInt(page, 10),
      per_page: parseInt(perPage, 10),
    };

    const response = await getProjects(oauthToken, portalId, filters);

    res.status(response.status).json(response.data);
  } catch (error: any) {
    next(error);
  }
};

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const portalId = req.body.portalId;
    const oauthToken = (req as any).user.zohoOAuthToken;
    const projectData = req.body;

    const response = await createProjectService(
      oauthToken,
      portalId,
      projectData
    );

    res.status(response.status).json({
      success: true,
      message: "Project created successfully",
      data: response.data,
    });
  } catch (error: any) {
    next(error);
  }
};

export const getZohoProjectDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const portalId = process.env.PORTAL_ID as string;
    const oauthToken = process.env.ZOHO_OAUTH_TOKEN as string;
    const { projectId } = req.params as { projectId: string };

    const response = await getProject(oauthToken, portalId, projectId);

    res.status(response.status).json({
      success: true,
      message: "Project details fetched successfully",
      data: response.data,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateZohoProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const portalId = process.env.PORTAL_ID as string;
    const oauthToken = process.env.ZOHO_OAUTH_TOKEN as string;
    const { projectId } = req.params as { projectId: string };

    const response = await updateProject(
      oauthToken,
      portalId,
      projectId,
      req.body
    );

    res.status(response.status).json({
      success: true,
      message: "Project updated successfully",
      data: response.data,
    });
  } catch (error: any) {
    next(error);
  }
};

export const deleteZohoProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const portalId = process.env.PORTAL_ID as string;
    const oauthToken = process.env.ZOHO_OAUTH_TOKEN as string;
    const { projectId } = req.params as { projectId: string };

    const response = await deleteProject(oauthToken, portalId, projectId);

    res.status(response.status).json({
      success: true,
      message: "Project deleted successfully",
      data: response.data,
    });
  } catch (error: any) {
    next(error);
  }
};
