import axios from "axios";
const News = axios.create({
    baseURL: process.env.REACT_APP_NEWS_INSTANCE_URL,
});

News.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Access-Control-Allow-Origin'] = '*';
        return config;
    },
    error => {
        Promise.reject(error)
    });
    export {
        News
    }