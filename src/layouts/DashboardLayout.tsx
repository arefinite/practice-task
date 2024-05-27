import Header from '@/components/dashboard/Header'
import SideNav from '@/components/dashboard/SideNav'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className=''>
      <Header />
      <div>
        <SideNav />
        <Outlet />
      </div>
    </div>
  )
}
export default DashboardLayout
