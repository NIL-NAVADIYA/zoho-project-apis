import { 
  getAllUsers, 
  createUser as createUserAPI, 
  getUserById as getUserByIdAPI,
  updateUserById as updateUserByIdAPI,
  deleteUserById as deleteUserByIdAPI,
  getUserRoles,
  getUserStatuses
} from "src/services/zoho/users";
import { UserListParams, CreateUserPayload } from "src/types/services/user";

export const getUsers = async (
  oauthToken: string,
  portalId: string,
  params: UserListParams
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }

  const response = await getAllUsers(portalId, params, oauthToken);
  return { status: 200, data: response };
};

export const createUser = async (
  oauthToken: string,
  portalId: string,
  userData: CreateUserPayload
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }
  if (!userData) {
    throw new Error("Missing userData");
  }

  const response = await createUserAPI(portalId, userData, oauthToken);
  return { status: 200, data: response };
};

export const getUser = async (
  oauthToken: string,
  portalId: string,
  userId: string
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }
  if (!userId) {
    throw new Error("Missing USER_ID");
  }

  const response = await getUserByIdAPI(portalId, userId, oauthToken);
  return { status: 200, data: response };
};

export const updateUser = async (
  oauthToken: string,
  portalId: string,
  userId: string,
  userData: Partial<CreateUserPayload>
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }
  if (!userId) {
    throw new Error("Missing USER_ID");
  }
  if (!userData) {
    throw new Error("Missing userData");
  }

  const response = await updateUserByIdAPI(portalId, userId, userData, oauthToken);
  return { status: 200, data: response };
};

export const deleteUser = async (
  oauthToken: string,
  portalId: string,
  userId: string
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }
  if (!userId) {
    throw new Error("Missing USER_ID");
  }

  const response = await deleteUserByIdAPI(portalId, userId, oauthToken);
  return { status: 200, data: response };
};

export const getRoles = async (
  oauthToken: string,
  portalId: string
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }

  const response = await getUserRoles(portalId, oauthToken);
  return { status: 200, data: response };
};

export const getStatuses = async (
  oauthToken: string,
  portalId: string
) => {
  if (!oauthToken) {
    throw new Error("Missing ZOHO_OAUTH_TOKEN");
  }
  if (!portalId) {
    throw new Error("Missing PORTAL_ID");
  }

  const response = await getUserStatuses(portalId, oauthToken);
  return { status: 200, data: response };
};
