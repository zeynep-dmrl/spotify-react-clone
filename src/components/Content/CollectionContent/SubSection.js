import React from 'react'
import HeaderTitle from '../HeaderTitle'
import { mixer, album, singer } from '../../../static/data/collection';
import { useLocation } from "react-router-dom";
import CardSection from '../CardSection';

function SubSection({ title }) {

    const { pathname } = useLocation();
    return (
        <>
            <section>
                <HeaderTitle title={title} seeAll={false} font={'bold'} textDecoration={'no-underline'} />

                <div className='grid grid-cols-6 gap-6'>
                    {
                        pathname.includes('playlist') && (mixer.map(item => <CardSection item={item} key={item.id} />))
                    }
                    
                    {
                        pathname.includes('artist') && (singer.map(item => <CardSection item={item} key={item.id} />))
                    }

                    {
                        pathname.includes('albums') && (album.map(item => <CardSection item={item} key={item.id} />))
                    }

                </div>
            </section>

        </>
    )
}

export default SubSection