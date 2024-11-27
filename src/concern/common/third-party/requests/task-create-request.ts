import { UUID } from "~/typescript";

import { buildRequest } from "~/infrastructure/http";

import { baseUrl } from "../base-url";

export const buildTaskCreateRequest = (data: TaskCreateRequestData) =>
  buildRequest<TaskCreateResponseData>({
    method: "POST",
    url: new URL(`/api/tasks`, baseUrl),
    data,
  });
// TODO change primitive types syntax highlight for vscode
export type TaskCreateRequestData = {
  title: string;
  description: string;
  projectId: UUID;
  priority: string;
};

export type TaskCreateResponseData = {
  id: UUID;
  title: string;
  description: string;
  project: {
    id: UUID;
    name: string;
    description: string;
  };
  status: string | null;
  priority: string;
};
