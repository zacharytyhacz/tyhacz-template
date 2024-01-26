import { AxiosResponse } from 'axios'
import { $axios } from './axios'
import { CreateCustomerType, UpdateCustomerType, CustomerType } from '../../server/models/Customer'

export const createCustomer = (body: CreateCustomerType): Promise<AxiosResponse<CustomerType>> => {
    return $axios.post('/customer', body)
}

export const getCustomers = (params: {
    limit?: number
} = {}): Promise<AxiosResponse<CustomerType[]>> => {
    return $axios.get('/customer', { params })
}

export const getCustomer = (customerId: string): Promise<AxiosResponse<CustomerType>> => {
    return $axios.get(`/customer/${customerId}`)
}

export const updateCustomer = (
    customerId: string,
    body: UpdateCustomerType
): Promise<AxiosResponse<CustomerType>> => {
    return $axios.put(`/customer/${customerId}`, body)
}

export const deleteCustomer = (
    customerId: string
): Promise<AxiosResponse<void>> => {
    return $axios.delete(`/customer/${customerId}`)
}

export const exportCustomers = async () => {
  return $axios.get('/customer/export', {
    responseType: 'blob'
  })
}
