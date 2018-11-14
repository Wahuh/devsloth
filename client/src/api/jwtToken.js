export const fetchToken = () => {
    return localStorage.getItem("jwtToken");
}

export const saveToken = (token) => {
    localStorage.setItem("jwtToken", token);
}