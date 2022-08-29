import React from 'react'
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Companies,
} from '../components'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Companies />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
