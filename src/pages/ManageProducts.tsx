import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useGetAllProducts } from '@/services/queries'
import { Link } from 'react-router-dom'

const ManageProducts = () => {
  const {
    data: products,
    isPending: isProductsPending,
    isError: isProductsError,
  } = useGetAllProducts()
  console.log(products)

  return (
    <main className='flex flex-col gap-8 my-8 w-full'>
      <Button className='w-fit' asChild>
        <Link to='/dashboard/add-product'>Add Product</Link>
      </Button>
      <h1 className='text-xl font-bold'>List of Products:</h1>
      {isProductsPending && <Loader />}
      {isProductsError && <p>There is some problem fetching the data.</p>}
      {!isProductsPending && !isProductsError && (
        <Table className='w-full'>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock Amount</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className='text-right'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(product => (
              <TableRow>
                <TableCell className='font-medium'>{product.title}</TableCell>
                <TableCell>
                  <img
                    src={
                      product.imageUrl ??
                      'https://moreishmarketing.com/app/uploads/2020/09/img_placeholder_1024x768.jpg'
                    }
                    alt={product.title}
                    className='h-12 w-12 rounded-full'
                  />
                </TableCell>
                <TableCell>{product.category.slice(0,1).toUpperCase() + product.category.slice(1)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.price}</TableCell>

                <TableCell className='text-right space-x-2'>
                  <Button variant='secondary'>Update</Button>
                  <Button variant='destructive'>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </main>
  )
}
export default ManageProducts
