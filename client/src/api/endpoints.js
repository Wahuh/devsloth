const BASE_URL = `${process.env.API_URL}/api`
//add v1 to base url on server
export const groupsEndpoint = `${BASE_URL}/groups`;
export const usersEndpoint = `${BASE_URL}/users`;
export const CURRENT_USER_ENDPOINT = `${BASE_URL}/users/me`;
export const CHANNELS_ENDPOINT = `${BASE_URL}/channels`;
export const TASKS_ENDPOINT = `${BASE_URL}/tasks`;
export const registrationEndpoint = `${BASE_URL}/register`;
export const loginEndpoint = `${BASE_URL}/login`;