import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../../icons/Icons'

function DownloadApp() {
  return (
    <Link to={"#"} className='h-10 flex flex-shrink-0 items-center gap-x-4 px-6 text-sm text-semibold text-link hover:text-white'>
        <span><Icon name={"download"} size={20} /></span>
        Uygulamayı Yükle
    </Link>
  )
}

export default DownloadApp