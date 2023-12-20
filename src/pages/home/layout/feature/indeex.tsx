import React from 'react'
import './index.scss'
import { FeatureCard } from './FeatureCard'

export const Feature: React.FC = () => {
  return (
    <div className="feature">
      <div className="container">
        <div>
          <FeatureCard />
        </div>
      </div>
    </div>
  )
}
