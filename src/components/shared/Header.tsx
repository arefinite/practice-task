import { useState } from 'react'
import { ModeToggle } from '../theme/ModeToggle'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Link } from 'react-router-dom'

const Header = () => {
  const [user, setUser] = useState(true)
  return (
    <header className='center py-4 flex justify-end'>
      <div className='flex gap-2 items-center'>
        {user ? (
          <>
            <Avatar>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='avatar.png'
                className='h-8 w-8 rounded-full'
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Welcome User</p>
            <Button variant='outline' asChild>
              <Link to='/dashboard'>Dashboard</Link>
            </Button>
            <Button onClick={() => setUser(false)} variant='destructive'>
              Logout
            </Button>
          </>
        ) : (
          <Button asChild>
            <Link to='/login'>Login/Register</Link>
          </Button>
        )}
        <ModeToggle />
      </div>
    </header>
  )
}
export default Header
