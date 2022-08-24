import React from 'react';
import Navbar from './Navbar';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from '../views/Home';
import Search from '../views/Search';
import Collection from '../views/Collection';
import SubSection from './Content/CollectionContent/SubSection';

function Content() {
  return (
    <main className='flex-auto overflow-auto'>
      <Navbar />
      <div className='px-8 py-5'>
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/collection' element={<Collection />} >
            <Route path='playlist' exact={true} element={<SubSection title={"Çalma Listeleri"} />} />
            <Route path='podcast' element={<SubSection title={"Podcast'ler"} />} />
            <Route path='artist' element={<SubSection title={"Sanatçılar"} />} />
            <Route path='albums' element={<SubSection title={"Albümler"} />} />
          </Route>
        </Routes>
      </div>
    </main>
  )
}

export default Content