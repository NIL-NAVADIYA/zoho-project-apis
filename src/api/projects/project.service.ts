import {
  ProjectError,
  ProjectNotFoundError,
} from "src/resources/errors/Project";
import {
  getAllProjects,
  createProject as createProjectAPI,
  updateProjectById as updateProjectByIdAPI,
  deleteProjectById as deleteProjectByIdAPI,
  getProjectById,
} from "src/services/zoho/projects";
import { CreateProjectPyload } from "src/types/services/project";

// ---- Services ----
export const getProjects = async (
  oauthToken: string,
  portalId: string,
  params: { page: number; per_page: number }
) => {
  if (!oauthToken) throw new ProjectError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new ProjectNotFoundError("Missing PORTAL_ID");

  try {
    const response = await getAllProjects(portalId, params, oauthToken);
    return {
      status: 200,
      data: response,
    };
  } catch (error: any) {
    throw new ProjectError(error.message);
  }
};

export const createProject = async (
  oauthToken: string,
  portalId: string,
  projectData: CreateProjectPyload
) => {
  if (!oauthToken) throw new ProjectError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new ProjectError("Missing PORTAL_ID");
  if (!projectData) throw new ProjectError("Missing projectData");

  try {
    const response = await createProjectAPI(portalId, projectData, oauthToken);
    return {
      status: 201,
      data: response,
    };
  } catch (error: any) {
    throw new ProjectError(error.message);
  }
};

export const getProject = async (
  oauthToken: string,
  portalId: string,
  projectId: string
) => {
  if (!oauthToken) throw new ProjectError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new ProjectError("Missing PORTAL_ID");
  if (!projectId) throw new ProjectError("Missing PROJECT_ID");

  try {
    const response = await getProjectById(portalId, projectId, oauthToken);
    if (!response) {
      throw new ProjectNotFoundError(projectId);
    }
    return {
      status: 200,
      data: response,
    };
  } catch (error: any) {
    throw new ProjectError(error.message);
  }
};

export const updateProject = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  projectData: Record<string, unknown>
) => {
  if (!oauthToken) throw new ProjectError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new ProjectError("Missing PORTAL_ID");
  if (!projectId) throw new ProjectError("Missing PROJECT_ID");
  if (!projectData) throw new ProjectError("Missing projectData");

  try {
    const response = await updateProjectByIdAPI(
      portalId,
      projectId,
      projectData,
      oauthToken
    );
    return {
      status: 200,
      data: response,
    };
  } catch (error: any) {
    throw new ProjectError(error.message);
  }
};

export const deleteProject = async (
  oauthToken: string,
  portalId: string,
  projectId: string
) => {
  if (!oauthToken) throw new ProjectError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new ProjectError("Missing PORTAL_ID");
  if (!projectId) throw new ProjectError("Missing PROJECT_ID");

  try {
    const response = await deleteProjectByIdAPI(
      portalId,
      projectId,
      oauthToken
    );
    return {
      status: 200,
      data: response,
    };
  } catch (error: any) {
    throw new ProjectError(error.message);
  }
};
