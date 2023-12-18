import React from 'react'

import nat8 from '../../../assets/images/nat-8.jpg'
import nat9 from '../../../assets/images/nat-9.jpg'
import video from '../../../assets/images/video.mp4'

import { Button } from 'components/button'
import { TestimonialCard } from './TestimonialCard'

import './index.scss'

export const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__video">
        <video autoPlay loop muted className="testimonials__video">
          <source src={video}></source>
        </video>
      </div>
      <div className="testimonial container grid grid--col-1 ">
        <h1 className="heading-secondary">WE MAKE PEOPLE GENUINELY HAPPY</h1>
        {testimonialCardData.map(data => (
          <TestimonialCard key={data.title} {...data} />
        ))}
        <Button variant="text" color="green" title="Read all stories →" />
      </div>
    </div>
  )
}

export type TestimonialCardData = {
  title: string
  text: string
  userImage: string
  userName: string
}

const testimonialCardData: TestimonialCardData[] = [
  {
    title: ' I HAD THE BEST WEEK EVER WITH MY FAMILY',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                ipsum sapiente aspernatur libero repellat quis consequatur ducimus
                quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
                aspernatur libero repellat quis consequatur ducimus quam nisi
                exercitationem omnis earum qui.`,
    userImage: nat8,
    userName: 'Mary Smith'
  },
  {
    title: 'WOW! MY LIFE IS COMPLETELY DIFFERENT NOW',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                ipsum sapiente aspernatur libero repellat quis consequatur ducimus
                quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
                aspernatur libero repellat quis consequatur ducimus quam nisi
                exercitationem omnis earum qui.`,
    userImage: nat9,
    userName: 'Jack Wilson'
  }
]
