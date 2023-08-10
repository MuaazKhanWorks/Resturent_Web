import React from 'react'
import Header from '../components/layouts/Header'
import Slider  from '../components/Slider'
import CARDS from '../components/CARDS'
// import Carousel from '../components/crowsers/Carousel'

const Home = () => {
  return (
    <>
    <Header/>
    <Slider/>
    {/* <Carousel/> */}
    <CARDS/>
    </>
  )
}

export default Home
