import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addProduct, deleteProduct, updateProduct } from './api'
import { Product } from '@/types/product'

export const useAddProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (product: Product) => addProduct(product),
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['products'] })
      }
    },
  })
}

export const useDeleteProduct = (id:string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => deleteProduct(id),
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['products'] })
      }
    },
  })
}

export const useUpdateProduct = (id:string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (product:Product) => updateProduct(id, product),
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({queryKey:['products']})
      }
    }
  })
}