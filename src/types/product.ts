export interface Product {
  id?: string 
  title: string 
  description: string 
  stock: number
  price: number 
  imageUrl: string  
  discount?: number 
  soldAmount?: number 
  category: string 
  rating: number 
}