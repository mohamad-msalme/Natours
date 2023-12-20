import React from 'react'

import { Button } from 'components/button'
import { ToursCard } from './ToursCard'
import './index.scss'

export const Tours: React.FC = () => {
  return (
    <div className="tours p-section">
      <div className="container grid grid--col-3">
        <h2 className="heading-secondary">Most popular tours</h2>
        <ToursCard items={toursCardData} />
        <Button variant="contained" color="green" title="Discover all tours" />
      </div>
    </div>
  )
}

export type TToursCardData = {
  title: string
  descriptions: string[]
  price: string
}

const toursCardData: TToursCardData[] = [
  {
    title: 'The Sea Explorer',
    descriptions: [
      '3 day tours',
      'Up to 30 people',
      '2 tour guides',
      'Sleep in cozy hotels',
      'Difficulty: easy'
    ],
    price: '320$'
  },
  {
    title: 'The Forest Hiker',
    descriptions: [
      '7 day tours',
      'Up to 40 people',
      '6 tour guides',
      'Sleep in provided tents',
      'Difficulty: medium'
    ],
    price: '420$'
  },
  {
    title: 'The Snow Adventurer',
    descriptions: [
      '5 day tours',
      'Up to 15 people',
      '3 tour guides',
      'Sleep in provided tents',
      'Difficulty: hard'
    ],
    price: '220$'
  }
]
