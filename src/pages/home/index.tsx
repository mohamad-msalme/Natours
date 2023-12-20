import React from 'react'
import { Header } from './layout/header'
import { About } from './layout/about'
import { Feature } from './layout/feature/indeex'
import { Tours } from './layout/tours'
import { Testimonials } from './layout/testimonials'
import { Booking } from './layout/booking'

export const Home: React.FC = () => (
  <>
    <Header />
    <About />
    <Feature />
    <Tours />
    <Testimonials />
    <Booking />
  </>
)
