const API_VERSION = "v1"
const API_URL = `${process.env.API_URL}/api/${API_VERSION}`;

export const CHANNELS_ENDPOINT = `${API_URL}/channels`;
export const CURRENT_USER_ENDPOINT = `${API_URL}/me`;
export const GROUPS_ENDPOINT = `${API_URL}/groups`;
export const LOGIN_ENDPOINT = `${API_URL}/login`
export const REGISTRATION_ENDPOINT = `${API_URL}/register`;
export const TASKS_ENDPOINT = `${API_URL}/tasks`;
export const LISTS_ENDPOINT = `${API_URL}/lists`;