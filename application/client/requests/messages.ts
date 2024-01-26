import { AxiosResponse } from 'axios'
import { $axios } from './axios'
import { CreateMessageType, MessageType } from '../../server/models/Messages'
import { ContactType } from '../../server/models/Contact'

export const createMessage = (body: CreateMessageType): Promise<AxiosResponse<MessageType>> => {
    return $axios.post('/messages', body)
}

export const getMessages = (): Promise<AxiosResponse<MessageType[]>> => {
    return $axios.get('/messages')
}

export const getMessageContactList = (): Promise<AxiosResponse<ContactType[]>> => {
    return $axios.get('/messages/available-contacts')
}
