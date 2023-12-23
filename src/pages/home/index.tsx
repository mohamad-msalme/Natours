import React from 'react'

import { Nav } from './layout/nav'
import { Tours } from './layout/tours'
import { About } from './layout/about'
import { Header } from './layout/header'
import { Footer } from './layout/footer'
import { Feature } from './layout/feature/indeex'
import { Booking } from './layout/booking'
import { Testimonials } from './layout/testimonials'

export const Home: React.FC = () => (
  <>
    <Nav />
    <Header />
    <About />
    <Feature />
    <Tours />
    <Testimonials />
    <Booking />
    <Footer />
  </>
)
