import React from 'react'

import './index.scss'
import { Form } from './Form'
export const Booking: React.FC = () => {
  return (
    <div id="Booking" className="booking-section p-section">
      <div className="booking container">
        <Form />
      </div>
    </div>
  )
}
