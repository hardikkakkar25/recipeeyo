import React from 'react'
import Header from '../Header/Header'
import Carousl from '../Common/Carousl'
import Services from './Services/Services'
import Recipies from '../Recipies/Recipies'

const Home = () => {
  return (
    <>
        <Header/>
        {/* <Carousl/>
        <Services/> */}
        <Recipies/>
    </>
  )
}

export default Home