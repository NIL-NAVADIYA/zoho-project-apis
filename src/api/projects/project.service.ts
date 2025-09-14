import {
  getAllProjects,
  createProject as createProjectAPI,
  getProjectById as getProjectByIdAPI,
  updateProjectById as updateProjectByIdAPI,
  deleteProjectById as deleteProjectByIdAPI,
} from "src/services/zoho/projects";

export const getProjects = async (
  oauthToken: string,
  portalId: string,
  params: { page: number; per_page: number }
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }

  const response = await getAllProjects(portalId, params, oauthToken);
  return { status: 200, data: response };
};

export const createProject = async (
  oauthToken: string,
  portalId: string,
  projectData: any
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }
  if (!projectData) {
    throw new Error("Missing projectData");
  }
  const response = await createProjectAPI(portalId, projectData, oauthToken);
  return { status: 200, data: response };
};

export const getProject = async (
  oauthToken: string,
  portalId: string,
  projectId: string
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }
  if (!projectId) {
    throw new Error("Missing PROJECT_ID");
  }

  const response = await getProjectByIdAPI(portalId, projectId, oauthToken);
  return { status: 200, data: response };
};

export const updateProject = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  projectData: any
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }
  if (!projectId) {
    throw new Error("Missing PROJECT_ID");
  }
  if (!projectData) {
    throw new Error("Missing projectData");
  }

  const response = await updateProjectByIdAPI(
    portalId,
    projectId,
    projectData,
    oauthToken
  );
  return { status: 200, data: response };
};

export const deleteProject = async (
  oauthToken: string,
  portalId: string,
  projectId: string
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }
  if (!projectId) {
    throw new Error("Missing PROJECT_ID");
  }

  const response = await deleteProjectByIdAPI(portalId, projectId, oauthToken);
  return { status: 200, data: response };
};
