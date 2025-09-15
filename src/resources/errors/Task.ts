export class TaskError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TaskError";
  }
}

export class TaskNotFoundError extends TaskError {
  constructor(taskId: string) {
    super(`Task not found with ID: ${taskId}`);
    this.name = "TaskNotFoundError";
  }
}

