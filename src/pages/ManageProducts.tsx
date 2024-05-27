import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const ManageProducts = () => {
  return (
    <main className='flex flex-col gap-8 my-8 w-full'>
      <Button className='w-fit'>Add Product</Button>
      <h1 className='text-xl font-bold'>List of Products:</h1>
      <Table className='w-full'>
        <TableHeader>
          <TableRow>
            <TableHead >Product Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock Amount</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>product name</TableCell>
            <TableCell>photo</TableCell>
            <TableCell>category</TableCell>
            <TableCell>50</TableCell>
            <TableCell className='text-right space-x-2'>
              <Button variant='secondary'>Update</Button>
              <Button variant='destructive'>Delete</Button>
            </TableCell>
          </TableRow>
       
        </TableBody>
      </Table>
    </main>
  )
}
export default ManageProducts
