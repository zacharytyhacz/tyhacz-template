import { AxiosResponse } from 'axios'
import { $axios } from './axios'
import { CreateProjectType, UpdateProjectType, ProjectType } from '../../server/models/Project'

export const createProject = (
    body: CreateProjectType
): Promise<AxiosResponse<ProjectType>> => {
    return $axios.post('/projects', body)
}

export const getProjects = (params: {
    skip?: number,
    limit?: number,
    customer?: string
} = {}): Promise<AxiosResponse<ProjectType[]>> => {
    return $axios.get('/projects', { params })
}

export const exportProjects = () => {
  return $axios.get('/projects/export', {
    responseType: 'blob'
  })
}

export const getProject = (
    projectId: string
): Promise<AxiosResponse<ProjectType>> => {
    return $axios.get(`/projects/${projectId}`)
}

export const updateProject = (
    projectId: string,
    body: UpdateProjectType
): Promise<AxiosResponse<ProjectType>> => {
    return $axios.put(`/projects/${projectId}`, body)
}

export const deleteProject = (
    projectId: string
): Promise<AxiosResponse<void>> => {
    return $axios.delete(`/projects/${projectId}`)
}
