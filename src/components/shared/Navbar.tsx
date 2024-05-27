import { navs } from '@/utlis/navs'
import { ShoppingBasket } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex bg-muted py-4'>
      <section className='flex justify-between center'>
        <div className='flex gap-2 items-center'>
          <ShoppingBasket size={30} color='blue' />
          <h1 className='text-2xl font-bold'>Shopping App</h1>
        </div>
        <ul className='flex gap-6'>
          {navs.map((nav, i) => (
            <li key={i}>
              <NavLink to={nav.href}>{nav.label}</NavLink>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}
export default Navbar
