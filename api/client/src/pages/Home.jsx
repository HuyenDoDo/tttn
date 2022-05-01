import React from 'react'
import Items from '../components/Items'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
        <Header />
        <Slider />
        <Items />
        <Footer />
    </div>
  )
}
