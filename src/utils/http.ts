import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { externalApiEndpoints as ep } from "common/constant"

const http = (baseUrl: string = ep.baseUrl, timeout: number = 3000) => {
    const client: AxiosInstance = axios.create({
        baseURL: baseUrl, timeout
    })

    // Intercept response object and handleSuccess and Error object
    client.interceptors.response.use(handleSuccess, handleError);

    function handleSuccess(response: AxiosResponse) {
        return response
    }

    function handleError(error: AxiosError) {
        return Promise.reject(error?.response?.data)
    }

    function get(path: string, config?: AxiosRequestConfig) {
        return client.get(path, config).then(response => response.data)
    }

    function post(path: string, payload: string, config?: AxiosRequestConfig) {
        return client.post(path, payload, config).then(response => response.data)
    }

    function put(path: string, payload: any, config?: AxiosRequestConfig) {
        return client.put(path, payload, config).then(response => response.data)
    }

    function patch(path: string, payload: any, config?: AxiosRequestConfig) {
        return client.patch(path, payload, config).then(response => response.data)
    }

    function _delete(path: string, config?: AxiosRequestConfig) {
        return client.delete(path, config).then(response => response.data)
    }

    return {
        get,
        post,
        put,
        patch,
        delete: _delete
    }
}

export default http;