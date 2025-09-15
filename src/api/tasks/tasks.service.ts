import {
  getAllTasks,
  getTaskById as getTaskByIdAPI,
  createTask as createTaskAPI,
  updateTaskById as updateTaskByIdAPI,
  deleteTaskById as deleteTaskByIdAPI,
} from "../../services/zoho/tasks";

import {
  CreateTaskPayload,
  UpdateTaskPayload,
} from "../../types/services/task";

import { TaskError, TaskNotFoundError } from "../../resources/errors/Task";

export const getTasks = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  params: { page: number; per_page: number }
) => {
  if (!oauthToken) throw new TaskError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new TaskError("Missing PORTAL_ID");
  if (!projectId) throw new TaskError("Missing PROJECT_ID");

  const response = await getAllTasks(portalId, projectId, params, oauthToken);
  return { status: 200, data: response };
};

export const createTask = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskData: CreateTaskPayload
) => {
  if (!oauthToken) throw new TaskError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new TaskError("Missing PORTAL_ID");
  if (!projectId) throw new TaskError("Missing PROJECT_ID");
  if (!taskData) throw new TaskError("Missing taskData");

  const response = await createTaskAPI(
    oauthToken,
    portalId,
    projectId,
    taskData
  );
  return { status: 201, data: response };
};

export const getTask = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskId: string
) => {
  if (!oauthToken) throw new TaskError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new TaskError("Missing PORTAL_ID");
  if (!projectId) throw new TaskError("Missing PROJECT_ID");
  if (!taskId) throw new TaskError("Missing TASK_ID");

  const response = await getTaskByIdAPI(
    oauthToken,
    portalId,
    projectId,
    taskId
  );
  if (!response) throw new TaskNotFoundError(taskId);

  return { status: 200, data: response };
};

export const updateTask = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskId: string,
  taskData: UpdateTaskPayload
) => {
  if (!oauthToken) throw new TaskError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new TaskError("Missing PORTAL_ID");
  if (!projectId) throw new TaskError("Missing PROJECT_ID");
  if (!taskId) throw new TaskError("Missing TASK_ID");
  if (!taskData) throw new TaskError("Missing taskData");

  const response = await updateTaskByIdAPI(
    portalId,
    projectId,
    taskId,
    taskData,
    oauthToken
  );
  return { status: 200, data: response };
};

export const deleteTask = async (
  oauthToken: string,
  portalId: string,
  projectId: string,
  taskId: string
) => {
  if (!oauthToken) throw new TaskError("Missing ZOHO_OAUTH_TOKEN");
  if (!portalId) throw new TaskError("Missing PORTAL_ID");
  if (!projectId) throw new TaskError("Missing PROJECT_ID");
  if (!taskId) throw new TaskError("Missing TASK_ID");

  const response = await deleteTaskByIdAPI(
    portalId,
    projectId,
    taskId,
    oauthToken
  );
  return { status: 200, data: response };
};
