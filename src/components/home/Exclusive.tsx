import { Card, CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

const Exclusive = () => {
  return (
    <section className='py-8'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold'>Exclusive Discount (upto <span className="text-red-500">50%</span>)</h2>
      </div>
      <div>
      <Carousel className="w-full py-10">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
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
