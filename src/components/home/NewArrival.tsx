import { products } from '@/utlis/products'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'



const NewArrival = () => {
  return (
    <section className='py-8'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold'>New Arrivals in Our Collection</h2>
     
      </div>
      <section className='grid grid-cols-1 md:grid-cols-4 gap-4 py-10'>
        {products.map((product, index) => (
          <Card key={index}>
            <CardHeader>
              <img src={product.image} alt='' />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>
                <span>Category: {product.category}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              Price: <strong>${product.price}</strong>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </section>
  )
}
export default NewArrival
