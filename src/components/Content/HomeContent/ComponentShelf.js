import React from 'react'
import HeaderTitle from '../HeaderTitle';
import CardSection from '../CardSection';

function ComponentShelf({ title, seeAll = false, items }) {
    return (
        <section className='mb-4 min-w-full'>
            <HeaderTitle title={title} seeAll={seeAll} font={'semibold'} textDecoration={'underline'}/>
            <div className='grid grid-cols-5 gap-x-6'>
                {items.map(item => <CardSection item={item} key={item.id} />)}
            </div>

        </section>
    )
}

export default ComponentShelf