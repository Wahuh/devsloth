const API_VERSION = "v1"
const BASE_URL = `${process.env.API_URL}`;
const BASE_API_URL = `${process.env.API_URL}/api/${API_VERSION}`;

//add v1 to base url on server
export const GROUPS_ENDPOINT = `${BASE_API_URL}/groups`;
export const usersEndpoint = `${BASE_API_URL}/users`;
export const CURRENT_USER_ENDPOINT = `${BASE_API_URL}/me`;
export const CHANNELS_ENDPOINT = `${BASE_API_URL}/channels`;
export const TASKS_ENDPOINT = `${BASE_API_URL}/tasks`;
export const REGISTRATION_ENDPOINT = `${BASE_URL}/register`;
export const LOGIN_ENDPOINT = `${BASE_URL}/login`