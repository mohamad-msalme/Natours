import React from 'react'
import { Button } from 'components/button'
import nat8 from '../../../assets/images/nat-8.jpg'
import nat9 from '../../../assets/images/nat-9.jpg'

import './toursDialog.scss'
export const ToursDialog: React.FC = () => (
  <div className="tours-dialog">
    <aside className="tours-dialog__aside">
      <img src={nat8} />
      <img src={nat9} />
    </aside>
    <main className="tours-dialog__main">
      <h1 className="heading-secondary">START BOOKING NOW</h1>
      <h3 className="heading-tertiary">
        IMPORTANT – PLEASE READ THESE TERMS BEFORE BOOKING
      </h3>
      <div className="tours-dialog__text-box">
        <p className="tours-dialog__text-box--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
          risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio
          facilisis mauris sit amet massa vitae. Mi bibendum neque egestas
          congue. Placerat orci nulla pellentesque dignissim enim sit. Vitae
          semper quis lectus nulla at volutpat diam ut venenatis. Malesuada
          pellentesque elit eget gravida cum sociis na
        </p>
        <div className="divider"></div>
        <p className="tours-dialog__text-box--text">
          toque penatibus et. Proin fermentum leo vel orci porta non pulvinar
          neque laoreet. Gravida neque convallis a cras semper. Molestie at
          elementum eu facilisis sed odio morbi quis. Faucibus vitae aliquet nec
          ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit.
          Amet massa vitae tortor condimentum lacinia quis vel eros donec. Sit
          amet facilisis magna etiam. Imperdiet sed euismod nisi porta.
        </p>
      </div>
      <Button variant="contained" color="green" title="book now" />
    </main>
  </div>
)
