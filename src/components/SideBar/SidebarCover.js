import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '../../icons/Icons';
import { setSidebar} from '../../store/Player';


function SidebarCover() {

    const current = useSelector(state => state.player.current);
    const dispatch = useDispatch();

    return (
        <div className='pt-[100%] bg-black relative group'>
            <img src={current.image} className={'w-full h-full object-cover absolute top-0 left-0'} alt="" />
            <button
                onClick={() => dispatch(setSidebar(false))}
                className='absolute top-1 right-1 w-6 h-6 bg-black opacity-0 group-hover:opacity-60 flex items-center justify-center -rotate-90 rounded-full hover:!opacity-100 hover:scale-[1.06]'>
                <Icon name={"arrow"} size={16} />
            </button>
        </div>
    )
}

export default SidebarCover