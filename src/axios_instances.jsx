import axios from "axios";

const local = axios.create({
    baseURL: "http://localhost:44387/",
});

local.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Access-Control-Allow-Origin'] = '*';
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

local.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);




export { local };
