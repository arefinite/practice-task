import { Button } from '../ui/button'
import Shopping from '/shopping.svg'
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-8 py-10'>
      <div className='space-y-4 flex-1 order-2 md:order-2'>
        <p>Enjoy your shopping with us!</p>
        <h1 className='text-4xl font-bold'>
          Get up to 30% Off on New Arrivals
        </h1>
        <p>
          Discover the latest trends and enjoy up to 30% off on our new
          arrivals! Elevate your style with fresh, fashionable pieces that won't
          break the bank. Don't miss out on these exclusive discounts—shop.
          Hurry, these deals won't last long!
        </p>
        <Button>Shop Now</Button>
      </div>
      <div className='flex-1 order-1 md:order-2'>
        {' '}
        <img src={Shopping} alt='shopping' />
      </div>
    </div>
  )
}
export default Banner
