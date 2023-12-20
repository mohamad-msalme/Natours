import React from 'react'
import { TToursCardData } from '.'

type TToursCardFront = TToursCardData & {
  index: number
}
export const ToursCardFront: React.FC<TToursCardFront> = ({
  index,
  title,
  descriptions
}) => {
  return (
    <div className="card__side card__side--front">
      {' '}
      <div className={`card__picture card__picture--${index + 1}`}>&nbsp;</div>
      <div className="card__heading">
        <span
          className={`card__heading--title card__heading--title--${index + 1}`}
        >
          {title}
        </span>
      </div>
      <div className="card__details body1">
        <ul>
          {descriptions.map(description => (
            <li key={title}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
