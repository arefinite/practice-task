import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Dashboard = () => {
  return (
    <main className="mt-8">
      <section className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
            <CardDescription>Number of total products</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>50</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>30</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>10</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>20</h1>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
export default Dashboard
