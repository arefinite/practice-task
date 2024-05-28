import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetAllProducts } from "@/services/queries"

const Dashboard = () => {
  const { data: product } = useGetAllProducts()
  
  const totalProduct = product && product.length 
  const lowStock = product && product.filter(product=> product.stock < 50).length
  return (
    <main className="mt-8">
      <section className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
            <CardDescription>Number of total products</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>{totalProduct}</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Low Stock</CardTitle>
            <CardDescription>Less than 50</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>{lowStock}</h1>
          </CardContent>
        </Card>
       
      </section>
    </main>
  )
}
export default Dashboard
