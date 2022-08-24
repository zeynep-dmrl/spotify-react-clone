import React from 'react'
import { NavLink } from 'react-router-dom'

function Collection() {

    const style = "flex items-center justify-center text-sm font-semibold rounded p-2 text-link leading-4 tracking-wide ";

    return (
        <div className='mr-auto ml-4 relative'>
            <div className='flex items-center gap-x-4'>

                <NavLink to={"/collection/playlist"} 
                className={({isActive}) => isActive ? style+"bg-active text-white" : style}>
                    Çalma Listeleri
                </NavLink>

                <NavLink to={"/collection/podcast"} 
                className={({isActive}) => isActive ? style+"bg-active text-white" : style}>
                    Podcast'ler
                </NavLink>

                <NavLink to={"/collection/artist"} 
                className={({isActive}) => isActive ? style+"bg-active text-white" : style}>
                    Sanatçılar
                </NavLink>

                <NavLink to={"/collection/albums"} 
                className={({isActive}) => isActive ? style+"bg-active text-white" : style}>
                    Albümler
                </NavLink>

            </div>
        </div>
    )
}

export default Collection