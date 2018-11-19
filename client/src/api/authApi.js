export const getJwt = () => localStorage.getItem("jwt");

export const setJwt = (token) => {
    localStorage.setItem("jwt", token);
}

export default {
    getJwt,
    setJwt,
}
