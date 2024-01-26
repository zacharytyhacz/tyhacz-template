import { AxiosResponse } from 'axios'
import { $axios } from './axios'
import { CreateServiceContractType, UpdateServiceContractType, ServiceContractType } from '../../server/models/ServiceContract'
import { CreateAssignedTechnicianType } from '../../server/models/AssignedTechnician'

export const createServiceContract = (
    body: CreateServiceContractType
): Promise<AxiosResponse<ServiceContractType>> => {
    return $axios.post('/service-contracts', body)
}

export const getServiceContracts = (): Promise<AxiosResponse<ServiceContractType[]>> => {
    return $axios.get('/service-contracts')
}

export const getServiceContract = (
    serviceContractId: string
): Promise<AxiosResponse<ServiceContractType>> => {
    return $axios.get(`/service-contracts/${serviceContractId}`)
}

export const deleteServiceContract = (
    serviceContractId: string
): Promise<AxiosResponse<void>> => {
    return $axios.delete(`/service-contracts/${serviceContractId}`)
}

export const updateServiceContract = (
    serviceContractId: string,
    body: UpdateServiceContractType
): Promise<AxiosResponse<ServiceContractType>> => {
    return $axios.put(`/service-contracts/${serviceContractId}`, body)
}

export const exportServiceContracts = () => {
  return $axios.get('/service-contracts/export', {
    responseType: 'blob'
  })
}

export const assignTechnicianToServiceContract = (
    serviceContractId: string,
    body: CreateAssignedTechnicianType
): Promise<AxiosResponse<ServiceContractType>> => {
    return $axios.post(`/service-contracts/${serviceContractId}/technicians`, body)
}
