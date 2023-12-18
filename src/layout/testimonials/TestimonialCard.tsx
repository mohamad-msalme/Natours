import React from 'react'
import { TestimonialCardData } from '.'
import './testimonialCard.scss'
export const TestimonialCard: React.FC<TestimonialCardData> = ({
  title,
  userImage,
  userName,
  text
}) => {
  return (
    <div className="testimonial__card">
      <div className="testimonial__card__img-box">
        <img src={userImage} />
        <p className="testimonial__card__img-box--caption">{userName}</p>
      </div>
      <div className="testimonial__card__text-box">
        <h2 className="heading-tertiary">{title}</h2>
        <p className="testimonial__card__text-box--paragraph body2">{text}</p>
      </div>
    </div>
  )
}
