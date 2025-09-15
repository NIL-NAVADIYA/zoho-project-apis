import { NextFunction, Request, Response } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "./tasks.service";

import {
  PaginationParams,
  CreateTaskPayload,
  UpdateTaskPayload,
} from "../../types/services/task";

export const listTasks = async (
  req: Request<
    { portalId: string; projectId: string },
    any,
    any,
    { page?: string; per_page?: string }
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const { portalId, projectId } = req.params;
    const oauthToken = (req as any).user.zohoOAuthToken;

    const page = parseInt(req.query.page || "1", 10);
    const perPage = parseInt(req.query.per_page || "10", 10);
    const filters: PaginationParams = { page, per_page: perPage };

    const response = await getTasks(oauthToken!, portalId, projectId, filters);
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const createTaskController = async (
  req: Request<{ portalId: string; projectId: string }, any, CreateTaskPayload>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { portalId, projectId } = req.params;
    const oauthToken = (req as any).user.zohoOAuthToken;
    const taskData = req.body;

    const response = await createTask(
      oauthToken!,
      portalId,
      projectId,
      taskData
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const getTaskDetails = async (
  req: Request<{
    portalId: string;
    projectId: string;
    taskId: string;
  }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { portalId, projectId, taskId } = req.params;
    const oauthToken = (req as any).user.zohoOAuthToken;

    const response = await getTask(oauthToken!, portalId, projectId, taskId);
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const updateTaskController = async (
  req: Request<
    { portalId: string; projectId: string; taskId: string },
    any,
    UpdateTaskPayload
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const { portalId, projectId, taskId } = req.params;
    const oauthToken = (req as any).user.zohoOAuthToken;
    const taskData = req.body;

    const response = await updateTask(
      oauthToken!,
      portalId,
      projectId,
      taskId,
      taskData
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const deleteTaskController = async (
  req: Request<{
    portalId: string;
    projectId: string;
    taskId: string;
  }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { portalId, projectId, taskId } = req.params;
    const oauthToken = (req as any).user.zohoOAuthToken;

    const response = await deleteTask(oauthToken!, portalId, projectId, taskId);
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
};
