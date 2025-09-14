import axios from "axios";
import config from "../../config/config";
import { CreateProjectPyload } from "src/types/services/project";

export const getAllProjects = async (
  portalId: string,
  params: { page: number; per_page: number },
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
    params: {
      ...params,
    },
  });

  return response.data;
};

export const createProject = async (
  portalId: string,
  payload: CreateProjectPyload,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects`;
  const response = await axios.post(url, payload, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getProjectById = async (
  portalId: string,
  projectId: string,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const deleteProjectById = async (
  portalId: string,
  projectId: string,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}`;
  const response = await axios.delete(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updateProjectById = async (
  portalId: string,
  projectId: string,
  payload: Partial<CreateProjectPyload>,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}`;
  const response = await axios.put(url, payload, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
