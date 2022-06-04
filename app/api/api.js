import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const BASE_URI = "https://ffbd-2405-201-5005-d090-25f8-2d0d-554a-11e5.in.ngrok.io";

const api = axios.create({
    baseURL: `${BASE_URI}/api`,
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'X-Platform': 'web',
        "Accept": "application/json"
      },
});

api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('access_token');
    console.log("token", token);
    if (token) {
        if(config.headers) {
            config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//     (response) => {
//       return response.data;
//     },
//     (error) => {
//       if (error.response.status === 400) {
//         if(response.data.funds_unavailable) {
//           // Redirect to the payments page
//         }
//       }
//       return Promise.reject(error)
// });

//       const generic_error = 'Something went wrong.';
  
//       /**
//        * API sends an error message in the format
//        * { error: error_message }
//        */
//       if (error.response && error.response.data) {
//         /**
//          * If the error is NOT initiated from the API (ie: for express/cloudflare errors)
//          * then use generic error message for toast message and pass error info to sentry
//          */
//         if (typeof error.response.data === 'string') {
//           const newData = {
//             error: generic_error,
//             info: error.response.data,
//           };
//           return Promise.reject(newData);
//         }
//         return Promise.reject(error.response);
//       }
  
  
//       if (error.message === 'Network Error') {
//         error.message = "offline_error";
//       }
//       return Promise.reject(error.message);
//     },
// );

// function checkUnauthRoute(params) {
//     if (params === '/' || params === '/login') {
//       return true;
//     } else {
//       return false;
//     }
// }
export default api;