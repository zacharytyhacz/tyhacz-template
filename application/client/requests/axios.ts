import axios from 'axios'

export const getToken = () => {
    return (
        localStorage.getItem('lmc-token') || ''
    )
}

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const $axios = axios.create({
    baseURL: '/api/'
})

$axios.interceptors.request.use((config) => {
    config.headers.Authorization = getAuthorizationHeader()
    return config
})

export { $axios }
