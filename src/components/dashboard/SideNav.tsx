import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { CircleGauge, FolderKanban, User } from 'lucide-react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase.config'

const SideNav = () => {
  const [signOut] = useSignOut(auth)
  const navigate = useNavigate()
  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }
  return (
    <nav className='center '>
      <Card className=' w-[250px] mt-8 p-4'>
        <ul className='space-y-4'>
          <li className='flex gap-2'>
            <CircleGauge />
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
          <li className='flex gap-2'>
            <FolderKanban />
            <NavLink to='manage-product'>Manage Product</NavLink>
          </li>
          <li className='flex gap-2'>
            <User />
            <NavLink to='profile'>Profile</NavLink>
          </li>
        </ul>
        <Button
          onClick={handleSignOut}
          variant='destructive'
          size='sm'
          className='mt-4'
        >
          Logout
        </Button>
      </Card>
    </nav>
  )
}
export default SideNav
