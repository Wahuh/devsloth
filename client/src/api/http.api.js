import axios from 'axios';

const setDefaultHeader = (header, value) => {
  axios.defaults.headers.common[header] = value;
};

// log successful requests somewhere?
// axios.interceptors.response.use(null, error => {
//   // axios couldn't connect
//   if (!error.response) {
//     if (!navigator.onLine) {
//       // detect if user is offline - need better implementation
//       error.message =
//         "It seems that you're offline. Please try again when you have an internet connection.";
//     } else {
//       error.message =
//         "Sorry, we couldn't connect to the server. Please try again later!";
//     }
//     return Promise.reject(error);
//   }

//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   return Promise.reject(error);
// });

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setDefaultHeader,
};
