import axios, { AxiosResponse } from 'axios'
import { handleError } from './errors'

export const localApi = axios.create({
  baseURL: process.env.BASE_URL,
})

localApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: any) => {
    throw handleError(err)
  }
)
