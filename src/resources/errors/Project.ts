export class ProjectError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProjectError";
  }
}

export class ProjectNotFoundError extends ProjectError {
  constructor(projectId: string) {
    super(`Project not found with ID: ${projectId}`);
    this.name = "ProjectNotFoundError";
  }
}
