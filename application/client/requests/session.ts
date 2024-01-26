import { AxiosResponse } from 'axios'
import { $axios } from './axios'

export const getSession = () => {
    return $axios.get('/session')
}

export const startPhoneLogin = (body: {
    phone: string
}): Promise<AxiosResponse<{ methodId: string }>> => {
    return $axios.post('/session/phone/start', body)
}

export const confirmPhoneLogin = (body: {
    code: string
    methodId: string
}): Promise<AxiosResponse<{ sessionJwt: string }>> => {
    return $axios.post('/session/phone/confirm', body)
}
