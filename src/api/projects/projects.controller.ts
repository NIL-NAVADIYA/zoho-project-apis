import { NextFunction, Request, Response } from "express";

import { getProjects } from "./project.service";

export const listProjects = async (req: Request, res: Response) => {
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
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    res.status(500).json({ message: "Unexpected error", error: error.message });
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

    const response = await createProject(oauthToken, portalId, projectData);
  } catch (error: any) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    res.status(500).json({ message: "Unexpected error", error: error.message });
  }
};

export const getZohoProjectDetails = async (req: Request, res: Response) => {
  try {
    const portalId = process.env.PORTAL_ID;
    const oauthToken = process.env.ZOHO_OAUTH_TOKEN;
    const { projectId } = req.params as { projectId: string };
    if (!portalId || !oauthToken) {
      return res.status(500).json({
        message: "Missing PORTAL_ID or ZOHO_OAUTH_TOKEN in environment",
      });
    }
    if (!projectId) {
      return res.status(400).json({ message: "projectId is required" });
    }

    res.status(200).json({ message: "Project details fetched successfully" });
  } catch (error: any) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    res.status(500).json({ message: "Unexpected error", error: error.message });
  }
};

export const updateZohoProject = async (req: Request, res: Response) => {
  try {
    const portalId = process.env.PORTAL_ID;
    const oauthToken = process.env.ZOHO_OAUTH_TOKEN;
    const { projectId } = req.params as { projectId: string };
    if (!portalId || !oauthToken) {
      return res.status(500).json({
        message: "Missing PORTAL_ID or ZOHO_OAUTH_TOKEN in environment",
      });
    }
    if (!projectId) {
      return res.status(400).json({ message: "projectId is required" });
    }

    // res.status(Response.status).json(Response.data);
  } catch (error: any) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    res.status(500).json({ message: "Unexpected error", error: error.message });
  }

  const deleteZohoProject = async (req: Request, res: Response) => {
    try {
      const portalId = process.env.PORTAL_ID;
      const oauthToken = process.env.ZOHO_OAUTH_TOKEN;
      const { projectId } = req.params as { projectId: string };
      if (!portalId || !oauthToken) {
        return res.status(500).json({
          message: "Missing PORTAL_ID or ZOHO_OAUTH_TOKEN in environment",
        });
      }
      if (!projectId) {
        return res.status(400).json({ message: "projectId is required" });
      }

      res.status(200).json({ message: "Project deleted successfully" });
    } catch (error: any) {
      if (error.response) {
        return res.status(error.response.status).json(error.response.data);
      }

      res
        .status(500)
        .json({ message: "Unexpected error", error: error.message });
    }
  };
};
