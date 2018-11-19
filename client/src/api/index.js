import { register, getCurrentUserData } from "./userApi";
import { fetchToken, saveToken } from "./jwtToken";
import tasks from "./tasksApi";

export default { 
    register,
    getCurrentUserData,
    fetchToken,
    saveToken,
    tasks,
}