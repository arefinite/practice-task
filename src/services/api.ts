import { Product } from '@/types/product'
import axios from 'axios'

const baseURL = 'https://66552c073c1d3b6029387294.mockapi.io/api/v1'
const apiClient = axios.create({ baseURL })

export const getAllProducts = async () => {
  return (await apiClient.get<Product[]>(`${baseURL}/products`)).data
}

export const getSingleProduct = async (id: string) => {
  return (await apiClient.get<Product>(`${baseURL}/products/${id}`)).data
}

export const addProduct = async (product: Product) => {
  await apiClient.post(`${baseURL}/products`, product)
}

export const deleteProduct = async (id:string) => {
  await apiClient.delete(`${baseURL}/products/${id}`)
}