import React from 'react'
import { Icon } from '../../icons/Icons'

function Search() {
  return (
    <div className='mr-auto ml-4 relative'>
        <label htmlFor='search-input' className='w-10 h-10 flex items-center justify-center absolute top-0 left-1 right-3 text-[#121212]'>
            <Icon size={24} name={"search"} />
        </label>
        <input type={'text'} id="search-input" autoFocus={true} className={"h-10 max-w-full w-[22.75rem] py-1.5 px-12 bg-white rounded-full text-ellipsis placeholder-black/50 text-black text-sm font-semibold outline-none"} placeholder={"Sanatçılar, şarkılar veya podcast'ler"}/>
    </div>
  )
}

export default Search