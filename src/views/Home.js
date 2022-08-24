import React from 'react'
import ComponentShelf from '../components/Content/HomeContent/ComponentShelf'
import {items, items2, items3} from '../static/data/songs'

function Home() {

  return (
    <div className='grid gap-y-6 pt-6'>
      <ComponentShelf title={'Günlük müzik ihtiyacın'} seeAll ="/vfmkvgkbn" items={items}/>
      <ComponentShelf title={'Odaklan'} seeAll ="/vfmkvgkbn" items={items2}/>
      <ComponentShelf title={'Evine müzik kat'} seeAll ="/vfmkvgkbn" items={items3}/>
    </div>
  )
}

export default Home