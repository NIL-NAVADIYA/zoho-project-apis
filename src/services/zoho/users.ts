import axios from "axios";
import config from "../../config/config";
import { CreateUserPayload, UpdateUserPayload, UserListParams } from "src/types/services/user";

export const getAllUsers = async (
  portalId: string,
  params: UserListParams,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/users`;

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

export const createUser = async (
  portalId: string,
  payload: CreateUserPayload,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/users`;
  const response = await axios.post(url, payload, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getUserById = async (
  portalId: string,
  userId: string,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/users/${userId}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updateUserById = async (
  portalId: string,
  userId: string,
  payload: Partial<CreateUserPayload>,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/users/${userId}`;
  const response = await axios.put(url, payload, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const deleteUserById = async (
  portalId: string,
  userId: string,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/users/${userId}`;
  const response = await axios.delete(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getUserRoles = async (
  portalId: string,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/roles`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getUserStatuses = async (
  portalId: string,
  oauthToken: string
) => {
  const url = `${config.zoho.baseUrl}/portal/${portalId}/userstatuses`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${oauthToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
