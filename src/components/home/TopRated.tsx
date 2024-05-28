import { Star } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Product } from '@/types/product'

interface Props {
  topRated: Product[] | undefined | false
}

const TopRated = ({ topRated }: Props) => {
  return (
    <section className='py-8'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold'>Top Rated Products</h2>
      </div>
      <section className='grid grid-cols-1 md:grid-cols-3 md:grid-cols-4 gap-4 py-10'>
        {topRated &&
          topRated.map((product, index) => (
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
              <CardContent className='flex gap-1 items-center'>
                Rating: <strong>{product.rating} </strong>
                <Star />
              </CardContent>
            </Card>
          ))}
      </section>
    </section>
  )
}
export default TopRated
