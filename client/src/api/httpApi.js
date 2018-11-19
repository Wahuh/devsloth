import axios from "axios";
import authApi from "./authApi";

axios.defaults.headers.common["Authorization"] = `Bearer ${authApi.getJwt()}`;

//log successful requests somewhere?
axios.interceptors.response.use(null, error => {
    console.log("Error response", JSON.stringify(error));

    //axios couldn't connect
    if (!error.status) {
        if (!navigator.onLine) {
            //detect if user is offline - need better implementation
            error.message = "It seems that you're offline. Please try again when you have an internet connection.";
        } else {
            error.message = "Sorry about this, our server might be down. Please try again later!";
        }
        return Promise.reject(error);
    }

    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    
    // if (!expectedError) {
    //     console.log("Logging the error", error);
    //     alert("An unexpected error occurred.");
    // }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}