import React from 'react'
import { Button } from 'components/button'
import { TToursCardData } from '.'

type TToursCardBack = Pick<TToursCardData, 'price'> & {
  index: number
  onClick: () => void
}
export const ToursCardBack: React.FC<TToursCardBack> = ({
  index,
  price,
  onClick
}) => {
  return (
    <div
      className={`card__side card__side--back card__side--back--${index + 1}`}
    >
      <div className="card__cta">
        <div className="card__price">
          <p className="card__price--only">Only</p>
          <p className="card__price--value">{price}</p>
        </div>
        <Button
          onClick={() => onClick()}
          title="Book"
          color="white"
          variant="contained"
        />
      </div>
    </div>
  )
}
