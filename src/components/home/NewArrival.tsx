import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Product } from '@/types/product'

interface Props {
  newArrival: Product[] | undefined | false
}

const NewArrival = ({ newArrival }: Props) => {
  return (
    <section className='py-8'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold'>New Arrivals in Our Collection</h2>
      </div>
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10'>
        {newArrival &&
          newArrival.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <img
                  src={product.imageUrl}
                  alt={product.category}
                  className='w-fit h-36'
                />
                <CardTitle className='pt-4'>{product.title}</CardTitle>
                <CardDescription>
                  <span>Category: {product.category}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span>
                  Before: <span className='line-through'>${product.price}</span>
                </span>
                <div className='flex flex-col gap-2'>
                <span className=' font-semibold'>
                 Price: $
                  {product.discount &&
                    product.price -
                      Math.ceil((product.price * product.discount) / 100)}{' '}
                  <span className='text-sm text-red-500'>
                    ({product.discount}% discount)
                  </span>
                </span>
                </div>
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
