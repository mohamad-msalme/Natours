import React from 'react'
import { Button } from 'components/button'

import nat1Img1 from 'assets/images/nat-1.jpg'

import nat1Img2 from 'assets/images/nat-2.jpg'
import nat1Img3 from 'assets/images/nat-3.jpg'

import './index.scss'
export const About: React.FC = () => {
  return (
    <section className="about p-section">
      <div className="container grid grid--col-2">
        <h2 className="heading-secondary">
          EXCITING TOURS FOR ADVENTUROUS PEOPLE
        </h2>
        <div className="about__text-box">
          <h3 className="heading-tertiary">
            YOU&apos;RE GOING TO FALL IN LOVE WITH NATURE
          </h3>
          <p className="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>
          <h3 className="heading-tertiary">
            LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
          </h3>
          <p className="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>
          <Button title="Leadrn more →" variant="text" color="green" />
        </div>
        <div className="about__img-box">
          <div className="about__img-box-container">
            <img src={nat1Img1} className="about__img-box--img-1 about-img" />
            <img src={nat1Img2} className="about__img-box--img-2 about-img" />
            <img src={nat1Img3} className="about__img-box--img-3 about-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
