import Header from '@/components/dashboard/Header'
import SideNav from '@/components/dashboard/SideNav'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div className='flex center'>
        <div>
          <SideNav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default DashboardLayout
