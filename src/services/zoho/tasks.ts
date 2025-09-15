import config from "../../config/config";
import axios from "axios";
// import { CreateTasksPyload } from "src/types/services/tasks";

export const getTasksByProject = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  params: { page: number; per_page: number }
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}/tasks`;
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
export const getTaskDetails = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskId: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}/tasks/${taskId}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const createTask = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  payload: any
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}/tasks`;
  const response = await axios.post(url, payload, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getTaskById = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskId: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}/tasks/${taskId}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export const updateTask = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskId: string,
  payload: any
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}/tasks/${taskId}`;
  const response = await axios.put(url, payload, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export const deleteTask = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskId: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}/tasks/${taskId}`;
  const response = await axios.delete(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const copyaTask = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskId: string,
  payload: any
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}/tasks/${taskId}/copy`;
  const response = await axios.post(url, payload, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const moveTask = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskId: string,
  payload: any
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/projects/${projectId}/tasks/${taskId}/move`;
  const response = await axios.post(url, payload, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// New API surface mirroring project module naming
export const getAllTasks = async (
  portalId: string,
  projectId: string,
  params: { page: number; per_page: number },
  oauthToken: string
) => {
  return getTasksByProject(oauthToken, portalId, projectId, params);
};

export const updateTaskById = async (
  portalId: string,
  projectId: string,
  taskId: string,
  payload: any,
  oauthToken: string
) => {
  return updateTask(oauthToken, portalId, projectId, taskId, payload);
};

export const deleteTaskById = async (
  portalId: string,
  projectId: string,
  taskId: string,
  oauthToken: string
) => {
  return deleteTask(oauthToken, portalId, projectId, taskId);
};
