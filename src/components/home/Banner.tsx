import { Button } from '../ui/button'
import Shopping from '/shopping.svg'
const Banner = () => {
  return (
    <div className='flex justify-between items-center gap-8 py-10'>
      <div className='space-y-4 flex-1'>
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
      <div className='flex-1'>
        {' '}
        <img src={Shopping} alt='shopping' />
      </div>
    </div>
  )
}
export default Banner
