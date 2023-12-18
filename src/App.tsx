import React from 'react'
import { About } from 'layout/about'
import { Header } from 'layout/header'
import { Feature } from 'layout/feature/indeex'
import { Tours } from 'layout/tours'
import { Testimonials } from 'layout/testimonials'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Feature />
      <Tours />
      <Testimonials />
    </>
  )
}
