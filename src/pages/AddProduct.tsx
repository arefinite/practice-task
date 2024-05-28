import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useAddProduct } from '@/services/mutations'
import { Product } from '@/types/product'
import { ArrowBigLeftIcon } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const AddProduct = () => {
  const { register, handleSubmit,setValue, reset } = useForm<Product>()
  const [,setSelectCategory] = useState<string | null>(null)
  const navigate = useNavigate()
  const { mutateAsync: addProductAsync, isPending: isAddProductPending } =
    useAddProduct()
  const handleAddProduct: SubmitHandler<Product> =  async product => {
    await addProductAsync(product)
    toast('Product Added Successfully')
    navigate('/dashboard/manage-products')
    reset()
    console.log(product)
  }

  return (
    <main className='my-8'>
      <Link to='/dashboard/manage-products'>
        <Button className='mb-8' variant='outline'>
          <ArrowBigLeftIcon />
          Go Back
        </Button>
      </Link>
      <h1 className='text-xl font-bold'>Add Product</h1>
      <form
        className='mt-8 w-full md:w-96 flex flex-col gap-4'
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div>
          <Input placeholder='Enter Title' required {...register('title')} />
        </div>
        <div>
          <Select onValueChange={(value => {
            setSelectCategory(value);
            setValue('category',value)
        })}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="mobile">Mobile</SelectItem>
          <SelectItem value="laptop">Laptop</SelectItem>
          <SelectItem value="smartwatches">Smartwatches</SelectItem>
          <SelectItem value="headphones">Headphones</SelectItem>
          <SelectItem value="accessories">Accessories</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div>
          <Textarea
            placeholder='Enter Description'
            required
            {...register('description')}
          />
        </div>
        <div>
          <Input
            placeholder='Enter Stock Quantity'
            type='number'
            required
            {...register('stock')}
          />
        </div>
        <div>
          <Input
            placeholder='Enter Price'
            type='number'
            required
            {...register('price')}
          />
        </div>
        <div>
          <Input
            placeholder='Enter Image URL'
            type='url'
            required
            {...register('imageUrl')}
          />
        </div>
        <div>
          <Input
            placeholder='Enter Discount %'
            type='number'
            required
            {...register('discount')}
          />
        </div>
        <div>
          <Input
            placeholder='Sold Amount'
            type='number'
            required
            {...register('soldAmount')}
          />
        </div>
        <div>
          <Input
            placeholder='Enter Rating (Out of 5)'
            type='number'
            required
            {...register('rating')}
          />
        </div>
        <Button type='submit' className='w-fit' disabled={isAddProductPending}>
          {isAddProductPending ? 'Adding Product' : 'Add Product'}
        </Button>
      </form>
    </main>
  )
}
export default AddProduct
