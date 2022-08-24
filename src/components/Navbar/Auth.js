import React from 'react'
import { Menu } from '@headlessui/react'
import { Icon } from '../../icons/Icons'
import { Link } from 'react-router-dom'

function Auth() {


  const user = {
    name: "Zeynep Demirel",
    avatar: "https://yt3.ggpht.com/yti/AJo0G0lYAo332u6YphHPlrspSSy-h53uVRLNJ2r8pXbCqg=s88-c-k-c0x00ffffff-no-rj-mo"
  }
  

  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
            <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-2"} alt="" />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open ? 'rotate-180' : undefined}>
              <Icon size={16} name="downDir" />
            </span>
          </Menu.Button>
          <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
            <Menu.Item>
              {({ active }) => (
                <Link to={"#"} className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active ? 'bg-white bg-opacity-10' : undefined}`}
                  
                >
                  Account
                  <Icon size={16} name="external" />
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                  to={"#"}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                  to={"#"}
                >
                  Log out
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}

export default Auth