import { Button } from '../ui/button'
import Buy from '/buy.svg'
const HowToBuy = () => {
  return (
    <section className='py-8'>
    <div className='flex flex-col items-center gap-4'>
      <h2 className='text-2xl font-bold'>How to Buy from us</h2>
    </div>
    <div className="flex justify-between py-10">
        <div className="flex-1">
          <img src={Buy} alt="" />
      </div>
        <div className="flex-1 items-center flex justify-center">
          <div className='space-y-4'>
          <h1 className='text-2xl font-bold'>Shop From Home OR Outlet</h1>
          <p>You can shop from our multiple outlet or you can shop by our official website</p>
          <Button>Explore Our Outlet Address</Button>
          </div>
      </div>
    </div>
  </section>
  )
}
export default HowToBuy