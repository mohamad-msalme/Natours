import React from 'react'
import './index.scss'
import { FeatureCard } from './FeatureCard'

export const Feature: React.FC = () => {
  return (
    <div id="Feature" className="feature-section">
      <div className="container feature">
        <FeatureCard />
      </div>
    </div>
  )
}
