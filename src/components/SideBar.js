import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Icon } from '../icons/Icons';
import DownloadApp from './SideBar/DownloadApp';
import Menu from './SideBar/Menu';
import Playlist from './SideBar/Playlist';
import SidebarCover from './SideBar/SidebarCover';


function SideBar() {

  const sidebar = useSelector((state) => state.player.sidebar);

  return (
    <aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
      <Link to={'/'}>
        <img src={logo} alt="spotify_logo" className="h-10 ml-5" />
      </Link>

      <Menu />

      <nav className='mt-6'>
        <ul>
          <li>
            <NavLink to={'#'} className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 text-black rounded-sm group-hover:bg-opacity-100'>
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </NavLink>
          </li>
          <li>
            <NavLink to={'#'} className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white to-blue-300 rounded-sm opacity-60 group-hover:opacity-100'>
                <Icon name="heartFilled" size={12} />
              </span>
              Beğenilen Şarkılar
            </NavLink>
          </li>
        </ul>

      </nav>

      <Playlist />

      <DownloadApp />

      {sidebar && <SidebarCover />}
    </aside>
  )
}

export default SideBar