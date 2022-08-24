import React from 'react'

function ListenedCategory({ category }) {
    return (
        <div
            style={{ '--color': category.backgroundColor }}
            className={"bg-[color:var(--color)] rounded-lg relative w-[24.25rem] h-[13.75rem] shrink-0"}>
            <div className='absolute inset-0 overflow-hidden'>
                <h3 className='text-white text-[2.5rem] tracking-tighter leading-7 font-bold p-4 break-words'>
                    {category.title}
                </h3>
                <img src={category.cover}
                    className="w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0 shadow-normal" alt=''
                />
            </div>
        </div>
    )
}

export default ListenedCategory