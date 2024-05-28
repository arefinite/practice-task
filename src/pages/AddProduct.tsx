import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowBigLeftIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <main className='my-8'>
        <Link to='/dashboard/manage-products'>
      <Button className='mb-8' variant='outline'>
          <ArrowBigLeftIcon />
          Go Back
      </Button>
        </Link>
      <h1 className='text-xl font-bold'>Add Product</h1>
      <form className='mt-8 w-full md:w-96 flex flex-col gap-4'>
        <div>
          <Input placeholder='Enter Title' required />
        </div>
        <div>
          <Input placeholder='Enter Category' required />
        </div>
        <div>
          <Textarea placeholder='Enter Description' required />
        </div>
        <div>
          <Input placeholder='Enter Stock Quantity' type='number' required />
        </div>
        <div>
          <Input placeholder='Enter Price' type='number' required />
        </div>
        <div>
          <Input placeholder='Enter Image URL' type='url' required />
        </div>
        <div>
          <Input placeholder='Enter Discount %' type='number' required />
        </div>
        <div>
          <Input placeholder='Sold Amount' type='number' required />
        </div>
        <div>
          <Input placeholder='Enter Rating (Out of 5)' type='number' required />
        </div>
        <Button type='submit' className='w-fit'>
          Add Product
        </Button>
      </form>
    </main>
  )
}
export default AddProduct
