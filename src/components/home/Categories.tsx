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

const categories = [
  'all',
  'mobile',
  'laptop',
  'smartwatch',
  'headphone',
  'accessories',
]



const Categories = () => {
  return (
    <section className='py-8'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold'>Top Categories</h2>
        <ul className='flex gap-4 py-10'>
          {categories.map((category, index) => (
            <li
              key={index}
              className='border border-gray-200 rounded-md px-4 py-2 my-2 cursor-pointer'
            >
              {category.slice(0, 1).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <section className='grid grid-cols-4 gap-4'>
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
export default Categories
