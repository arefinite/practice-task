import LoginBox from '@/components/auth/LoginBox'
import RegisterBox from '@/components/auth/RegisterBox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Lock } from 'lucide-react'

const Login = () => {
  return (
    <main className='grid place-items-center h-screen w-screen'>
      <section>
        <div className='flex justify-center'>
          <div className='flex gap-2 items-center pb-8 font-bold'>
            <Lock color='red' size={30} />
            <span className='text-3xl'>
              Admin <span className='text-red-500'>Area</span>
            </span>
          </div>
        </div>
        <Tabs defaultValue='login' className='w-[400px]'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='login'>Login</TabsTrigger>
            <TabsTrigger value='registration'>Registration</TabsTrigger>
          </TabsList>
          <TabsContent value='login'>
            <LoginBox />
          </TabsContent>
          <TabsContent value='registration'>
            <RegisterBox />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}

export default Login
