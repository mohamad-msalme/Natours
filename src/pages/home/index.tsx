import React from 'react'
import { Header } from './layout/header'
import { About } from './layout/about'
import { Feature } from './layout/feature/indeex'
import { Tours } from './layout/tours'
import { Testimonials } from './layout/testimonials'
import { Booking } from './layout/booking'
import { Footer } from './layout/footer'
import { Nav } from './layout/nav'

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
