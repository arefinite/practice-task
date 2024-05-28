import Loader from "@/components/Loader"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetAllProducts } from "@/services/queries"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"

const Products = () => {
  const { data: products, isPending: isProductsPending, isError: isProductsError } = useGetAllProducts()
  
  if (isProductsPending) return <div className="grid place-items-center h-screen"><Loader /></div>
  if(isProductsError) return <p className="center my-8">Something went wrong!</p>
  return (
    <main className="center my-8">
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products && products.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <img
                src={product.imageUrl}
                alt={product.title}
                className='w-fit h-36 object-cover'
              />
              <CardTitle className='pt-4'>{product.title}</CardTitle>
              <CardDescription>
                <span>Category: {product.category}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col gap-1'>
                <span>
                  Price: <strong>${product.price}</strong>
                </span>
                <span className='flex gap-1 items-center'>
                  Rating: <strong>{product.rating}</strong> <Star size={20} />
                </span>
                <span>
                  Stock : <strong>{product.stock}</strong>
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className=' font-semibold'>
                  <div>
                  Before: <span className='line-through'>${product.price}</span>
                </div>
                 Price: $
                  {product.discount &&
                    product.price -
                      Math.ceil((product.price * product.discount) / 100)}{' '}
                  <span className='text-sm text-red-500'>
                    ({product.discount}% discount)
                  </span>
                </span>
              </div>
              <div>Sold Amount: {product.soldAmount} units</div>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button variant='secondary'><Link to={`/product/${product.id}`}>View Details</Link></Button>
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  )
}
export default Products