import * as types from "./types";
import { 
} from "./types";
import { AUTH_LOGIN_SUCCESS, AUTH_REGISTRATION_SUCCESS } from "../../auth/duck/types";

export const isLoading = (state = true, action) => {
    switch(action.type) {
            
        case AUTH_LOGIN_SUCCESS:
        case AUTH_REGISTRATION_SUCCESS:
            return false;

        default:
            return state;
    }
};
