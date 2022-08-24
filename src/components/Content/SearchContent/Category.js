import React from 'react'

function Category({ category }) {
    return (
        <div
            style={{ '--color': category.backgroundColor }}
            className={"bg-[color:var(--color)] rounded-lg before:pt-[100%] before:block relative"}>
            <div className='absolute inset-0 overflow-hidden'>
                <h3 className='text-white text-2xl tracking-tighter leading-7 font-bold p-4 break-words absolute'>
                    {category.title}
                </h3>
                <img src={category.cover} 
                className="w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0 shadow-normal" alt=''
                />
            </div>
        </div>
    )
}

export default Category