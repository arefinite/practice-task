import { Product } from '@/types/product'
import { Card, CardContent } from '../ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

interface Props {
  discountedProducts: Product[] | undefined | false
}

const Exclusive = ({ discountedProducts }: Props) => {
  return (
    <section className='center py-8'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold'>
          Exclusive Discount (upto <span className='text-red-500'>50%</span>)
        </h2>
      </div>
      <div>
        <Carousel className='w-full py-10'>
          <CarouselContent className='-ml-1'>
            {discountedProducts &&
              discountedProducts.map(product => (
                <CarouselItem
                  key={product.id}
                  className='pl-1 md:basis-1/2 lg:basis-1/5'
                >
                  <div className='p-1'>
                    <Card>
                      <CardContent className='flex aspect-square items-center justify-center p-6'>
                        <div className='flex flex-col gap-2'>
                          <img
                            src={product.imageUrl}
                            alt={product.title}
                            className='w-fit h-36 object-cover'
                          />
                          <span className=' font-semibold'>
                            {product.title}
                          </span>
                          <div className='flex flex-col gap-2'>
                            <span>
                              Before:{' '}
                              <span className='line-through'>
                                ${product.price}
                              </span>
                            </span>
                            <span className=' font-semibold'>
                              Price: $
                              {product.discount &&
                                product.price -
                                  Math.ceil(
                                    (product.price * product.discount) / 100
                                  )}{' '}
                              <span className='text-sm text-red-500'>
                                ({product.discount}% discount)
                              </span>
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
export default Exclusive
