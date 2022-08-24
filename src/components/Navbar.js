import React from 'react'
import Auth from './Navbar/Auth'
import Navigations from './Navbar/Navigations'
import { useLocation } from 'react-router-dom'
import Search from './Navbar/Search';
import Collection from './Navbar/Collection';

function Navbar() {
  
  const { pathname } = useLocation();

  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>

      <Navigations />

      {pathname === '/search' && <Search />}
      {pathname.includes('/collection',0) && <Collection/>}

      <Auth />
    </nav>
  )
}

export default Navbar