import { AxiosResponse } from 'axios'
import { $axios } from './axios'
import { CreateWorkOrderType, UpdateWorkOrderType, WorkOrderType } from '../../server/models/WorkOrder'
import { CreateAssignedTechnicianType } from '../../server/models/AssignedTechnician'

export const createWorkOrder = (
    body: CreateWorkOrderType
): Promise<AxiosResponse<WorkOrderType>> => {
    return $axios.post('/work-order', body)
}

export const updateWorkOrder = (
    workOrderId: string,
    body: UpdateWorkOrderType
): Promise<AxiosResponse<WorkOrderType>> => {
    return $axios.put(`/work-order/${workOrderId}`, body)
}

export const getWorkOrder = (
    workOrderId: string
): Promise<AxiosResponse<WorkOrderType>> => {
    return $axios.get(`/work-order/${workOrderId}`)
}

export const getWorkOrders = (
    params: {
        limit?: number
        customer?: string
    } = {}
): Promise<AxiosResponse<WorkOrderType[]>> => {
    return $axios.get('/work-order', { params })
}

export const deleteWorkOrder = (
    workOrderId: string
): Promise<AxiosResponse<void>> => {
    return $axios.delete(`/work-order/${workOrderId}`)
}

export const exportWorkOrders = () => {
  return $axios.get('/work-order/export', {
    responseType: 'blob'
  })
}

export const addTechnicianToWorkOrder = (
    workOrderId: string,
    body: CreateAssignedTechnicianType
): Promise<AxiosResponse<WorkOrderType>> => {
    return $axios.post(`/work-order/${workOrderId}/technicians`, body)
}
