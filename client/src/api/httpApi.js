import axios from "axios";

//function to set this token somewhere??
//axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("jwt")}`;

function setAuthHeader(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

//log successful requests somewhere?
axios.interceptors.response.use(null, error => {
    //axios couldn't connect
    console.log(error.response, error.status);
    if (!error.response) {
        if (!navigator.onLine) {
            //detect if user is offline - need better implementation
            error.message = "It seems that you're offline. Please try again when you have an internet connection.";
        } else {
            error.message = "Sorry, we couldn't connect to the server. Please try again later!";
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
    setAuthHeader: setAuthHeader,
}