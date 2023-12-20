import { MapIcon } from 'components/icons/MapIcon'
import { MegaPhone } from 'components/icons/MegaPhone'
import { HeartIcon } from 'components/icons/HeartIcon'
import { GlobalIcon } from 'components/icons/GlobaIcon'
import React from 'react'
import './featureCard.scss'
const featureCardData = [
  {
    title: 'Explore the world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    icon: <GlobalIcon width="6rem" />
  },
  {
    title: 'Meet nature',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    icon: <MegaPhone width="6rem" />
  },
  {
    title: 'Find your way',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    icon: <MapIcon width="6rem" />
  },
  {
    title: 'Live a healthier life',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    icon: <HeartIcon width="6rem" />
  }
]

export const FeatureCard: React.FC = () => (
  <>
    {featureCardData.map(item => (
      <div key={item.title} className="feature__card">
        {item.icon}
        <h3 className="heading-tertiary">{item.title}</h3>
        <p className="feature__card--description body1">{item.description}</p>
      </div>
    ))}
  </>
)
