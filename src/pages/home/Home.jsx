import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import './Home.scss'
import Treanding from './Tranding/Treanding'
import Popular from './popular/Popular'
import TopRated from './TopRated/TopRated'

const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Treanding/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
