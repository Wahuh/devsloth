import axios from "axios";
import { registrationUrl } from "./apiEndpoints";

export function register(user) {
    axios.get(registrationUrl)
    .then(({ data }) => {
        
    });
}